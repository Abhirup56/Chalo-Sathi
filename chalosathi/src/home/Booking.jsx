import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

function Booking() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleBookingClick = () => {
    if (isSignedIn) {
      navigate("/rides");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="flex justify-center items-center sm:flex-row flex-col sm:space-x-4">
      <div>
        <input
          type="text"
          placeholder="Where from?"
          className="input input-bordered input-info w-full max-w-xs sm:m-0 mb-3"
        />
      </div>
      <h4>to</h4>
      <div>
        <input
          type="text"
          placeholder="Where to?"
          className="input input-bordered input-info w-full max-w-xs sm:m-0 mt-3"
        />
      </div>
      <button
        onClick={handleBookingClick}
        className="btn btn-info text-white max-w-xs sm:m-0 mt-5 w-[215px]"
      >
        Request ride fair
      </button>
    </div>
  );
}

export default Booking;
