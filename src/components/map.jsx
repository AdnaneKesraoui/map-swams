import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container styling
const containerStyle = {
  width: "500%",
  height: "600px",
};

// Center coordinates
const initialCenter = {
  lat: 33.54, // Latitude of Al Akhawayn University
  lng: -5.1060, // Longitude
};

const MapWithMarker = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDdOInjjLfG1QrGqefC-cSsLB9ypeDzBMU">
      <GoogleMap
        mapContainerStyle={containerStyle} // Set map container dimensions
        center={initialCenter} // Center map at these coordinates
        zoom={18} // Set zoom level
        
      >
        {/* Add a marker at the center */}
        <Marker 
  position={{ lat: 33.54, lng: -5.1060 }} 
  icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
/>

        
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMarker;
