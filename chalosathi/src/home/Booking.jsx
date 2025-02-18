import React from 'react'
import { Link } from "react-router-dom";
function Booking() {
  return (
    <div className='flex justify-center items-center sm:flex-row flex-col sm:space-x-4 '>
    <div>
        <input
        type="text"
        placeholder="Where from?"
        className="input input-bordered input-info w-full max-w-xs sm:m-0 mb-3" />
        
    </div>
    <h4>to</h4>
    <div>
        <input
        type="text"
        placeholder="where to?"
        className="input input-bordered input-info w-full max-w-xs sm:m-0 mt-3" />
    </div>
    <Link to="/rides">
    <button className="btn btn-info text-white max-w-xs sm:m-0 mt-5 w-[215px]">Request ride fair</button></Link>
    </div>
  )
}

export default Booking