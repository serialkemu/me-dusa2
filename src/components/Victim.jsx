// VictimForm.js
import React, { useState } from 'react';

const Victim = ({ onSubmit }) => {
  const [abuserName, setAbuserName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ abuserName, location });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="abuserName">Name of abuser:</label>
        <input type="text" id="abuserName" value={abuserName} onChange={(e) => setAbuserName(e.target.value)} />

        <label htmlFor="sgbvLocation">Location it took place:</label>
        <input type="text" id="sgbvLocation" value={location} onChange={(e) => setLocation(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Victim;
