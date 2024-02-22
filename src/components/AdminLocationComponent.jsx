import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Assuming you have a function to fetch the user's location from your backend
// const fetchUserLocation = async () => { ... };

const AdminLocationComponent = ({ googleMapsApiKey }) => {
  const [userLocation, setUserLocation] = useState({ lat: -3.745, lng: -38.523 });

  useEffect(() => {
    // Call fetchUserLocation periodically or via WebSocket
    const interval = setInterval(() => {
      // Simulating fetching location from a backend
      fetchUserLocation().then(setUserLocation);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        center={userLocation}
        zoom={10}
      >
        <Marker position={userLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default AdminLocationComponent;
