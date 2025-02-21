import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

function MyMap({ originLatitude, originLongitude, destinationLatitude, destinationLongitude }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!originLatitude || !originLongitude || !destinationLatitude || !destinationLongitude) return;

        const map = mapRef.current;
        if (!map) return;

        // Clear existing route
        map.eachLayer((layer) => {
            if (layer instanceof L.Routing.Control) {
                map.removeControl(layer);
            }
        });

        L.Routing.control({
            waypoints: [
                L.latLng(originLatitude, originLongitude),
                L.latLng(destinationLatitude, destinationLongitude)
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            showAlternatives: false,
            fitSelectedRoutes: true
        }).addTo(map);

    }, [originLatitude, originLongitude, destinationLatitude, destinationLongitude]);

    const center = (originLatitude && originLongitude) ? [originLatitude, originLongitude] : [13.084622, 80.248357];
    const zoom = 13;

    return (
        <div className="flex justify-center items-center w-screen text-white relative z-10">
            <div className="w-screen h-[400px] border rounded-lg shadow-lg">
                <MapContainer
                    center={center}
                    zoom={zoom}
                    className="h-full w-full"
                    whenCreated={(map) => mapRef.current = map}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            </div>
        </div>
    );
}

export default MyMap;