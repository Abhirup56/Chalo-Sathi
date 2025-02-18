import React from "react";
import History from "./History";

function Hists() {
  console.log("Hists component is rendering..."); // ✅ Debugging

  return (
    <div className="min-h-screen bg-[#121a21] flex flex-col items-center pt-20 overflow-y-auto mx-2">
      <div className="w-full max-w-2xl">
        <History />
        <History />
        {/* ✅ Reduced initially for debugging */}
      </div>
    </div>
  );
}

export default Hists;
