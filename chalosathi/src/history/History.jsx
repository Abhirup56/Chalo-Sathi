import React from 'react';

function History() {
  return (
    <div className="w-full max-w-2xl space-y-4 pt-2">
      <div className="card card-side bg-base-100 shadow-lg rounded-lg flex items-center">
        <figure className="p-4">
          <img
            src="https://static-00.iconduck.com/assets.00/uber-icon-2048x2048-qbj0bfi1.png"
            alt="Cab brand"
            className="w-24 lg:w-28"
          />
        </figure>
        <div className="card-body flex flex-col">
          <div className="flex flex-row justify-between">
            <h2 className="card-title text-white text-3xl lg:text-4xl">Uber</h2>
            <h3 className="text-3xl font-bold relative right-0">₹440.13</h3>
          </div>
          <div className="flex flex-row space-x-10 sm:space-x-20">
            <h4 className="border px-1">Barrackpore</h4>
            <h4 className="border px-0">Bidhan nagar</h4>
          </div>
          <div className="flex flex-row space-x-10 sm:space-x-20 font-light">
            <h4>11:00 am</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
