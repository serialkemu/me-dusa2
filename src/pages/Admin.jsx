// AdminPage.js
import React from 'react';

const Admin = ({ formData }) => {
  const { abuserName, location } = formData;

  return (
    <div>
      <h3>Admin Page</h3>
      <p>Abuser's Name: {abuserName}</p>
      <p>Location: {location}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Admin;
