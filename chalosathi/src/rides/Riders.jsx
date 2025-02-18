import React from "react";
import Ride from "./Ride";
import MyMap from "../home/MyMap";
  // ✅ Fixed missing import

function Riders() {
  console.log("Riders component is rendering..."); // ✅ Debugging

  return (
    <div className="bg-[#121a21] min-h-screen text-white flex flex-col md:flex-row">
      <div className="flex flex-col w-full md:w-2/3">
        <div className="mt-16 pb-20 overflow-y-auto flex-grow space-y-4 px-4 max-h-[75vh] relative top-10 sm:relative sm:top-3">
          <Ride />
          <Ride />
          <Ride />
          <Ride />
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/3 p-4 relative top-14">
        <MyMap/>
        <br />
        <h3 className="text-md border border-white p-3">Barrackpore</h3>
        <br />
        <h3 className="text-lg border border-white p-3">Dumdum</h3>
      </div>
      <div className="fixed bottom-0 w-full bg-[#1b252f] p-4">
        <button className="w-full btn btn-error text-lg text-white">Cancel Ride</button>
      </div>
    </div>
  );
}

export default Riders;
