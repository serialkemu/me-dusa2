import React from 'react'

const Registration = () => {
  return (
    <div className='reg'>
        <div className='position-absolute top-50 start-50 translate-middle bg-primary bg-opacity-25'>
        <h3 className='text-center'>Registration</h3>
        <div className='row container'>
        <div className="col-6 mb-3">
            <label htmlFor="name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="Name" placeholder="Kemunto"/>
            </div>
            <div className="col-6 mb-3">
            <label htmlFor="otherNames" class="form-label">Other names</label>
            <input type="text" class="form-control" id="otherNames" placeholder="Justus Ombati"/>
            </div>
        <div className="col-6 mb-3">
            <label htmlFor="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
        <div className="col-6 mb-3">
            <label htmlFor="admission" class="form-label">Admission Number</label>
            <input type="text" class="form-control" id="admission" placeholder="sc232/1461/2020"/>
            </div>
            <div className="col-6 mb-3">
            <label htmlFor="pasword" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder=""/>
            </div>
            <div className="col-6 mb-3">
            <label htmlFor="pasword" class="form-label">confirm password</label>
            <input type="password" class="form-control" id="password" placeholder=""/>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Registration