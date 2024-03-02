import React from 'react'
import Edu from '../components/Edu'
import fraud from '../assets/images/fraud.png'
import edu1 from '../assets/images/edu1.jpeg'
import EduVideo from '../components/EduVideo'
import { Link } from 'react-router-dom'



const Education = () => {
  return (
    <div className='m-3 p-5' >
      <div className="text-center">
      <h1>
        Education
      </h1>
      </div>
      <div className="container d-flex justify-content-center mb-3">
  <div className="card m-3 responsvive-container" style={{ width: '70%' }}>
    <div className='mt-4'>
      <h4 className="card-title text-center">Safety and Prevention</h4>
      <hr />
    </div>
    <div className="row g-0">
      <div className="col-md-3 col-sm-2">
        <img src={edu1} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-9 col-sm-10">
        <div className="card-body">
          <p className="card-text">Sexual and gender-based violence (SGBV) is a serious issue that affects people of all genders, ages, and backgrounds. It is important to remember that SGBV is never the victim's fault, and there are resources available to help survivors. If you or someone you know needs help, please reach out to a crisis hotline or mental health professional. You are not alone.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="card">
<div className='container d-flex  justify-content-center'>
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active text-dark" aria-current="page" href="#">ALL</a>
  </li>
  <li class="nav-item">  
    <Link className="nav-link text-dark" to="/EduVideo">Videos</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link text-dark " to="/Edu">Documents</Link>
  </li>
  </ul>
</div>
<hr/>
<div className='m-3 p-3'> 
  <div className=''>
    <Edu/>
  </div>
  <div className=''>
    <EduVideo/>
  </div>
</div>
</div>
     
    </div>
  )
}

export default Education