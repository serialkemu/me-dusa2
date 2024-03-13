import React from 'react';
import { Link } from 'react-router-dom';
import ReportInfo from '../components/ReportInfo';
import witness from '../assets/images/witness.png';
import man from '../assets/images/man.png';
import mobileMap from '../assets/images/mobileMap.png';
import ReportCard from '../components/ReportCard';


const Report = () => {
  return (
    
      <div className='womenz container m-3'>
        <div className="text-center">
        <h3 className='text-center'>Your safety is our concern</h3>
        </div>
        
        <div className=" d-flex justify-content-center">
          <div className=" p-5 text-center col-8">
          <div className="card mb-3 " style={{ maxWidth: "540px" }}>
          <div className="row g-0 bg-success">
            <div className="col-md-4">
              <img src={mobileMap} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Live Event</h5>
                <p className="card-text">Report an event as it happens to get immediate help</p>
                <Link to="/liveReport" className="btn btn-secondary">Live</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 bg-success" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={man} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Victim Form</h5>
                <p className="card-text">Get the help you deserve and need.</p>
                <Link to="/victim" className="btn btn-secondary">Victim</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 bg-success" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={witness} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Witness form</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <Link to="/witnessForm" className="btn btn-secondary">Witness</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-4 border border-info">
          <ReportInfo/>
        </div>
        </div>
       
        
        
      </div>
   
  )
}

export default Report;
