import React from 'react'
import Edu from '../components/Edu'



const Education = () => {
  return (
    <div className='mb-3' >
      <h1 className='text-center'>
        Education
      </h1>
      <div>
        <h4>Safety and Prevention</h4>
        <div className="card mb-3" style={{width: '40rem'}}>
  <div className="row g-0">
   
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div> <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>

  </div>
</div>
      </div>
      <Edu/>
    </div>
  )
}

export default Education