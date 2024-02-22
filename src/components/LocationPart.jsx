import React, { useState, useEffect } from 'react';

const LocationPart = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(latitude)
          console.log(longitude)
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (latitude && longitude) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyASlM72a6U0IT2WjcPjwgcPJrSfTQmM-Nw&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });
        console.log(latitude)

        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: 'Current Location',
        });
      };
    }
  }, [latitude, longitude]); // Run effect when latitude or longitude changes

  return (
    <div>
      <h1>Location Data</h1>
      {latitude && longitude && (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      )}
    </div>
  );
};

export default LocationPart;
