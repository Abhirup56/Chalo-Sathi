import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap() {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 20;

  return (
    <div className="flex justify-center items-center w-screen text-white relative z-10">
      <div className="w-screen h-[300px] border rounded-lg shadow-lg md:h-[400px] lg:h-[350px]">
        <MapContainer center={[13.084622, 80.248357]} zoom={9} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
      </div>
    </div>
  );
}

export default MyMap;
