import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

function Booking({ origin, setOrigin, destination, setDestination, handleRequestRide, error }) {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    const handleBookingClick = (event) => {
        if (isSignedIn) {
            handleRequestRide(event); // Pass the event to the handler
        } else {
            navigate("/sign-in");
        }
    };

    return (
        <form onSubmit={handleBookingClick} className="flex justify-center items-center sm:flex-row flex-col sm:space-x-4">
            <div>
                <input
                    type="text"
                    placeholder="Where from?"
                    className="input input-bordered input-info w-full max-w-xs sm:m-0 mb-3"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
            </div>
            <h4>to</h4>
            <div>
                <input
                    type="text"
                    placeholder="Where to?"
                    className="input input-bordered input-info w-full max-w-xs sm:m-0 mt-3"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
                type="submit"
                className="btn btn-info text-white max-w-xs sm:m-0 mt-5 w-[215px]"
            >
                Request ride fair
            </button>
        </form>
    );
}

export default Booking;