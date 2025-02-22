import React, { useState, useEffect } from 'react';
import MyMap from './MyMap';
import Booking from './Booking';
import Request from './Request';
import { useAuthContext } from '../context/UserProvider';

function Home() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user: clerkUser, isSignedIn } = useAuthContext();

  useEffect(() => {
    const fetchUserData = async () => {
      if (clerkUser && isSignedIn) {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:5002/api/users/${clerkUser.id}`);
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            setError("Failed to load user data.");
            console.error("Failed to fetch user data:", response.status, response.statusText);
          }
        } catch (error) {
          setError("Error fetching user data.");
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [clerkUser, isSignedIn]);

  const handleRequestRide = (event) => {
    event.preventDefault();
    setError('');

    if (!origin.trim() || !destination.trim()) {
      setError("Please enter both origin and destination.");
      return;
    }

    const ridesUrl = `/rides?from=${encodeURIComponent(origin)}&to=${encodeURIComponent(destination)}`;
    window.location.href = ridesUrl;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center text-white min-h-[calc(100vh-10rem)]"> {/* Added min-h and adjusted value */}
          Loading...
        </div>
      );
    }

    if (!user) {
      return (
        <div className="flex items-center justify-center text-white min-h-[calc(100vh-10rem)]"> {/* Added min-h and adjusted value */}
          {error || 
          <a href='/sign-in' className="text-white">Please sign in to continue.</a>}
        </div>
      );
    }

    if (user.userType === 'Rider') {
      return (
        <Booking
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          handleRequestRide={handleRequestRide}
          error={error}
        />
      );
    } else if (user.userType === 'Driver') {
      return <Request />;
    } else {
      return <p className="text-white">Unknown user type.</p>;
    }
  };

  return (
    <div className='bg-[#121a21] min-h-screen'> {/* Replaced h-screen with min-h-screen */}
      <MyMap />
      <div className='flex justify-center items-center m-10'>
        {renderContent()}
      </div>
    </div>
  );
}

export default Home;