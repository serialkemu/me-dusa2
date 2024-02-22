import React from 'react'

const Login = () => {
  return (
    <div  className='position-absolute top-50 start-50 translate-middle bg-opacity-25'>
        <h3 className=''>Login</h3>
    <div className='contianer user-box'>
       <div className="mb-3">
            <label htmlFor="admission" className="form-label">Registration Number</label>
            <input type="email" className="form-control" id="admission" placeholder="sc232/1461/2020"/>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="pasword" className="form-label">password</label>
            <input type="password" className="form-control" id="password" placeholder="***"/>
            </div>

    </div>
  )
}

export default Login