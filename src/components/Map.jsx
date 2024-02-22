import React, { useState, useEffect } from 'react';

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [watchId, setWatchId] = useState(null);

  useEffect(() => {
    const mapElement = document.getElementById('map');

    const murangaCenter = { lat: -0.7216, lng: 37.1528 }; // Approximate center of Muranga County

    const map = new window.google.maps.Map(mapElement, {
      center: murangaCenter,
      zoom: 10, // Adjust the initial zoom level as needed
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    });

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition(pos);
          map.setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        (error) => {
          console.error('Error:', error);
        }
      );

      setWatchId(watchId);
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <div>
      <h3>Your location</h3>
      <form action="" method="POST">
      <div id="map" style={{ height: '100vh', width: '100%' }} />
      {position && (
        <p>
          Latitude: {position.coords.latitude}, Longitude: {position.coords.longitude}
        </p>
      )}
      <button>
        <input type='submit'/>
      </button>
      </form>
     
    </div>
  );
};

export default MapComponent;
