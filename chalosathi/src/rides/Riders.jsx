import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Ride from "./Ride";
import MyMap from "../home/MyMap";

function Riders() {
    const [searchParams] = useSearchParams();
    const origin = searchParams.get("from");
    const destination = searchParams.get("to");

    const [originCoordinates, setOriginCoordinates] = useState(null);
    const [destinationCoordinates, setDestinationCoordinates] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const geocodeAddresses = async () => {
            setLoading(true);

            try {
                console.log("Geocoding addresses:", { origin, destination });
                const originCoords = await geocodeAddress(origin);
                const destCoords = await geocodeAddress(destination);

                if (originCoords && destCoords) {
                    setOriginCoordinates(originCoords);
                    setDestinationCoordinates(destCoords);
                    setError(''); // Clear any previous errors
                } else {
                    setError("Failed to geocode one or both addresses.");
                }
            } catch (error) {
                console.error("Geocoding error:", error);
                setError("Error geocoding addresses: " + error.message); // Display error message
            } finally {
                setLoading(false);
            }
        };

        if (origin && destination) {
            geocodeAddresses();
        } else {
            console.log("Origin or destination is missing.");
            setError("Enter origin and destination."); // Added error message
            setLoading(false);
        }
    }, [origin, destination]);

    const geocodeAddress = async (address) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
            );
            if (!response.ok) {
                throw new Error(`Geocoding failed with status: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.length > 0) {
                return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
            } else {
                throw new Error(`Could not find coordinates for address: ${address}`);
            }
        } catch (error) {
            console.error("Geocoding error:", error);
            throw error; // Re-throw the error for the calling function to handle
        }
    };

    // console.log("Riders component is rendering...");

    if (loading) {
        return <div className="min-h-screen bg-[#121a21] text-white flex items-center justify-center">Loading map...</div>;
    }

    return (
        <div className="bg-[#121a21] min-h-screen text-white flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-2/3">
                <div className="mt-16 pb-20 overflow-y-auto flex-grow space-y-4 px-4 max-h-[75vh] relative top-10 sm:relative sm:top-3">
                    <Ride />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 relative top-14">
                {error && <div className="text-red-500">{error}</div>}
                {originCoordinates && destinationCoordinates ? (
                    <MyMap
                        originLatitude={originCoordinates.latitude}
                        originLongitude={originCoordinates.longitude}
                        destinationLatitude={destinationCoordinates.latitude}
                        destinationLongitude={destinationCoordinates.longitude}
                    />
                ) : (
                    <div>Enter origin and destination.</div>
                )}
                <br />
                {origin && <h3 className="text-md border border-white p-3">From: {origin}</h3>}
                {destination && <h3 className="text-lg border border-white p-3">To: {destination}</h3>}
            </div>
            <div className="fixed bottom-0 w-full bg-[#1b252f] p-4">
                <button className="w-full btn btn-error text-lg text-white" onClick={() => { window.location.href = "/"; }}>Cancel Ride</button>
            </div>
        </div>
    );
}

export default Riders;