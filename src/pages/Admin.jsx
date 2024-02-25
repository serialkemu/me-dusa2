// AdminPage.js
import React from 'react';

const Admin = ({ formData }) => {
  const { abuserName, location } = formData;
// VictimForm component
const VictimForm = ({ onSubmit }) => {
  const [victimName, setVictimName] = useState('');
  const [abuserName, setAbuserName] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the form data to the parent component
    onSubmit({ victimName, abuserName, location, urgency });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Victim's Name"
        value={victimName}
        onChange={(e) => setVictimName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Abuser's Name"
        value={abuserName}
        onChange={(e) => setAbuserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Urgency"
        value={urgency}
        onChange={(e) => setUrgency(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Admin component
const Admin = ({ victimName, abuserName, location, urgency }) => {
  return (
    <div>
      <h3 className='text-center mt-3 pd-3 display-3'>ADMIN</h3>
      <div>
        <dl>
          <dt>Time</dt>
          <dd>{/* Include time information here */}</dd>

          <dt>Victim's Name</dt>
          <dd>{victimName}</dd>

          <dt>Abuser's Name</dt>
          <dd>{abuserName}</dd>

          <dt>Is the abuser known</dt>
          <dd>
            <p>{abuserName}</p>
          </dd>

          <dt>Location</dt>
          <dd>{location}</dd>

          <dt>Type of abuse</dt>
          <dd>type</dd>

          <dt>Urgency</dt>
          <dd>{urgency}</dd>

          <dt>Live Location</dt>
          <dd>
            {/* Customized div to display map with directions */}
            <div className="map-container"></div>
          </dd>

          <dt>Additional evidence</dt>
          <dd>any media evidence</dd>
        </dl>
      </div>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  // State to store form data
  const [formData, setFormData] = useState({});

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h3>Admin Page</h3>
      <p>Abuser's Name: {abuserName}</p>
      <p>Location: {location}</p>
      {/* Add more fields as needed */}
    </div>
  );
};
}

export default Admin;
