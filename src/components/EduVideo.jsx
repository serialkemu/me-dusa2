import React from 'react'
import video from '../assets/images/video.gif'

const EduVi = () =>{
  return(
    <div className='card'>
      <iframe width="677" height="381" src="https://www.youtube.com/embed/yzhat-YaGGk" title="Glossary A to Z - SGBV - EN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

const EduVideo = () => {
  return (
    <div>
      <div className="text-center">
        <h3>Video education</h3>
      </div>
      <div className="card m-3 responsvive-container" style={{ width: '70%' }}>
    <div className='mt-4'>
      <h4 className="card-title text-center">Safety and Prevention</h4>
      <hr />
    </div>
    <div className="row g-0">
      <div className="col-md-3 col-sm-2">
        <img src={video} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-9 col-sm-10">
        <div className="card-body">
          <p className="card-text">Sexual and gender-based violence (SGBV) is a serious issue that affects people of all genders, ages, and backgrounds. It is important to remember that SGBV is never the victim's fault, and there are resources available to help survivors. If you or someone you know needs help, please reach out to a crisis hotline or mental health professional. You are not alone.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
      <EduVi/>
    </div>
  )
}

export default EduVideo