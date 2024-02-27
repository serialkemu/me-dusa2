import React from 'react'
import Edu from '../components/Edu'
import fraud from '../assets/images/fraud.png'
import edu1 from '../assets/images/edu1.jpeg'



const Education = () => {
  return (
    <div className='mb-3' >
      <h1 className='text-center'>
        Education
      </h1>
      <div>
        <div className="card mb-3 responsive-container" style={{width: '90%'}}>
  <div className="row g-0">
    <div className='mt-2'>
    <h4 className="card-title text-center">Safety and Prevention</h4>
    <hr></hr>
    </div>
    <div className="col-md-9 col-sm-10">
      <div className="card-body">
       
        <p className="card-text">Sexual and gender-based violence (SGBV) is a serious issue that affects people of all genders, ages, and backgrounds. It is important to remember that SGBV is never the victim's fault, and there are resources available to help survivors. If you or someone you know needs help, please reach out to a crisis hotline or mental health professional. You are not alone.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div> <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
     <div className="col-md-3 col-sm-2">
      <img src={edu1} className="img-fluid rounded-start" alt="..."/>
    </div>

  </div>
</div>
      </div>
      <Edu/>
    </div>
  )
}

export default Education