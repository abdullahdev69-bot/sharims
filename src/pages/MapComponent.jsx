import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon
const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

// Locations with address info
const locations = [
  {
    name: "Sharims Solutions DHA Office",
    address: "DHA Phase 1, Islamabad, Pakistan",
    coords: [33.521618903241006, 73.09230619336036],
  },
  {
    name: "Toronto Office",
    address: "1100 King St W, Toronto, Canada",
    coords: [43.640128, -79.422638],
  },
];

// Component to auto-fit map bounds
const FitBounds = ({ locations }) => {
  const map = useMap();

  if (locations.length > 0) {
    const bounds = L.latLngBounds(locations.map((loc) => loc.coords));
    map.fitBounds(bounds, { padding: [50, 50] }); // padding keeps markers away from edges
  }

  return null;
};

const OfficeMap = () => {
  return (
    <MapContainer
      center={[20, 0]} // temporary world center
      zoom={2}         // wide zoom, will auto-adjust
      style={{ height: "100%", width: "100%" }}
      className="rounded-xl"
    >
      {/* Map Tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Markers with address in popup */}
      {locations.map((loc, i) => (
        <Marker key={i} position={loc.coords}>
          <Popup>
            <b>{loc.name}</b>
            <br />
            {loc.address}
          </Popup>
        </Marker>
      ))}

      {/* Auto-fit bounds */}
      <FitBounds locations={locations} />
    </MapContainer>
  );
};

export default OfficeMap;


