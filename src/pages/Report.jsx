import React, { useState } from 'react';
import LiveReport from '../components/LiveReport';
import Victim from '../components/Victim';
import WitnessForm from '../components/WitnessForm';
import witness from '../assets/images/witness.png';
import man from '../assets/images/man.png';
import mobileMap from '../assets/images/mobileMap.png';
import ReportCard from '../components/ReportCard';

const Report = () => {
  // State to manage the active page
  const [activePage, setActivePage] = useState(null);

  // Function to handle button clicks and set the active page
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // Function to render the active page component
  const renderActivePage = () => {
    switch (activePage) {
      case 'live':
        return <LiveReport />;
      case 'victim':
        return <Victim />;
      case 'witness':
        return <WitnessForm />;
      default:
        return null;
    }
  };

  return (
    <div className='womenz'>
      <div className='mb-3 col-12' >
      <h3 className='text-center mb-3'>Eliuds safety is our concern</h3>
      </div>
     
      <div class="card mb-3 align-middle " style={{width: "35rem"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid text-center rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      
      

      <div className=''>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0 bg-secondary">
            <div className="col-md-4">
              <img src={mobileMap} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Live Event</h5>
                <p className="card-text">Report an event as it happens to get immediate help</p>
                {/* Use onClick to set the active page */}
                <button type="button" className="btn btn-info" onClick={() => handlePageChange('live')}>Live</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 bg-warning" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={man} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Victim Form</h5>
                <p className="card-text">Get the help you deserve and need.</p>
                {/* Use onClick to set the active page */}
                <button type="button" className="btn btn-info" onClick={() => handlePageChange('victim')}>Victim</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={witness} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Witness form</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* Use onClick to set the active page */}
                <button type="button" className="btn btn-info" onClick={() => handlePageChange('witness')}>Witness</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render the active page component */}
      {renderActivePage()}
    </div>
  )
}

export default Report;
