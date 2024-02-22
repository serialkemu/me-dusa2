import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const AlertComponent = () => {
  const [alertSent, setAlertSent] = useState(false);
  const [liveLocation, setLiveLocation] = useState(null);

  useEffect(() => {
    // Simulate alert being sent from a certain place
    // This could be triggered by user interaction or some other event
    sendAlert();
  }, []);

  const sendAlert = () => {
    // Call backend API to send the alert
    // This could involve making an HTTP POST request to your backend server
    // Include information about the alert location and any relevant data
    // Upon successful response, setAlertSent(true)
    const alertData = {
      location: 'Muranga County',
      // Include any other relevant information
    };

    // Simulate sending email
    sendEmail(alertData);
    setAlertSent(true);
  };

  const sendEmail = (alertData) => {
    // Call backend API to send email
    // This could involve making an HTTP POST request to your backend server
    // Include information about the alert in the email body
    const emailContent = `
      <h2>Emergency Alert</h2>
      <p>Location: ${alertData.location}</p>
      <p>Coordinates: ${liveLocation}</p>
      <!-- Include any other relevant information -->
    `;

    // Example code for sending email using SendGrid API
    // Replace with your actual email service provider
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'harrietkko@example.com', // Email address of the recipient
        subject: 'Emergency Alert',
        html: emailContent,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const getLiveLocation = () => {
    // Get user's live location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLiveLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      }, (error) => {
        console.error('Error getting location:', error);
      });
    }
  };

  return (
    <div>
      <h2>Alert Component</h2>
      {!alertSent && <button onClick={sendAlert}>Send Alert</button>}
      {alertSent && <p>Alert Sent! Waiting for live location...</p>}
      {liveLocation && (
        <div>
          <p>Live Location: {liveLocation}</p>
          {/* Display live location on a map */}
        </div>
      )}
      {alertSent && !liveLocation && <button onClick={getLiveLocation}>Get Live Location</button>}
    </div>
  );
};

export default AlertComponent;
