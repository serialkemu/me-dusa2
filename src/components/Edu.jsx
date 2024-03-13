import React from 'react'
import car1 from "../assets/images/car1.jpeg"
import bookshelf from '../assets/images/bookshelf.gif'

const EduDoc = ({eduImg,eduTitle,eduDes,modEduTitle,modEduDes}) =>{
  return(
    <div className="card col-4 m-2" style={{width: "18rem"}}>
      <img src={eduImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{eduTitle}</h5>
        <p className="card-text">{eduDes}</p>
        <a href="#"><div>
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Learn More
        </button>
<div className="modal fade modal-dialog-scrollable modal-fullscreen-sm-down" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{modEduTitle}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {modEduDes}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Download</button>
      </div>
    </div>
  </div>
</div>
      </div></a>
  </div>
</div>
  )
}


const Edu = () => {
  return (
    <div>
      <div className="card m-3 responsvive-container" style={{ width: '70%' }}>
    <div className='mt-4'>
      <h4 className="card-title text-center">Safety and Prevention</h4>
      <hr />
    </div>
    <div className="row g-0">
      <div className="col-md-3 col-sm-2">
        <img src={bookshelf} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-9 col-sm-10">
        <div className="card-body">
          <p className="card-text">Sexual and gender-based violence (SGBV) is a serious issue that affects people of all genders, ages, and backgrounds. It is important to remember that SGBV is never the victim's fault, and there are resources available to help survivors. If you or someone you know needs help, please reach out to a crisis hotline or mental health professional. You are not alone.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  <div className='row g-3'>
      <EduDoc eduImg={car1} eduTitle={'Types of SGBV'} eduDes={'an overview of the types of sgbv'} modEduTitle={'Types of SGBV'} modEduDes={' SGBV stands for sexual and gender-based violence. It is a term used to describe any act of violence, threat, or coercion directed against a person because of their sex, gender, gender identity, or sexual orientation. This can include:Physical violence: Hitting, kicking, slapping, choking, burning, or using weaponsSexual violence: Rape, sexual assault, unwanted sexual touching, or exploitationPsychological violence: Threats, intimidation, emotional abuse, or humiliationEconomic violence: Denying access to financial resources, sabotaging employment, or controlling access to propertyHarmful traditional practices: Female genital mutilation (FGM), child marriage, forced marriage, or honor killingsSGBV is a serious and widespread problem that affects people of all ages, genders, and socioeconomic backgrounds. It has devastating consequences for individuals, families, and communities, including:Physical and emotional harm: Pain, injury, disability, trauma, and mental health problemsSexual and reproductive health problems: Unwanted pregnancy, sexually transmitted infections (STIs), and HIV/AIDSSocial and economic consequences: Loss of education, employment, and social statusDeath: In extreme cases, SGBV can lead to deathIf you or someone you know is experiencing SGBV, there are resources available to help. You can contact a hotline, seek professional help, or join a support group. It is important to remember that you are not alone and that help is available.'}/>
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
      <EduDoc  eduTitle={''} eduDes={''} modEduTitle={''} modEduDes={''} />
    </div>
    </div>
    
  )
}

export default Edu