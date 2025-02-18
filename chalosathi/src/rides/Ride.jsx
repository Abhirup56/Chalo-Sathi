import React from 'react';

function Ride() {
  return (
    <div className="bg-[#212d39] shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center w-full space-y-3 sm:space-y-0">
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">UberX</h1>
        <p className="text-sm text-gray-300">3 min away</p>
        <button className="btn btn-sm md:btn-md lg:btn-lg btn-info text-white mt-2 w-full sm:w-auto" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Uber</button>
        
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col justify-center items-center space-y-5">
            <p>Fetching the nearest Driver . . .</p>
            <span className="loading loading-spinner text-info"></span>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" />
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <span className="text-lg md:text-xl font-bold text-white sm:relative sm:right-10 md:relative md:right-0 lg:relative lg:right-20">₹ 366.71</span>

      <div className="w-20 lg:w-24">
        <img
          src="https://static-00.iconduck.com/assets.00/uber-icon-2048x2048-qbj0bfi1.png"
          alt="Uber Icon"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Ride;
