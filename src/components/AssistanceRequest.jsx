// AssistanceRequest.js

import React from 'react';
import axios from 'axios';

const AssistanceRequest = () => {
  const requestAssistance = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        sendLocation(location);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  };

  const sendLocation = (location) => {
    axios.post('/api/send-location', { location })
      .then(response => {
        // Handle success
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error sending location:', error);
      });
  };

  const showAlert = () => {
    const isAssistanceNeeded = window.confirm('Do you need assistance?');
    if (isAssistanceNeeded) {
      requestAssistance();
    }
  };

  return (
    <div>
      <h1>Assistance Request</h1>
      <button onClick={showAlert}>Request Assistance</button>
    </div>
  );
};

export default AssistanceRequest;
