import React from 'react'
import car1 from "../assets/images/car1.jpeg"


const Education = () => {
  return (
    <div className='mb-3' >
      <h1 className='text-center'>
        Education
      </h1>
      <div className="card" style={{width: "18rem"}}>
  <img src={car1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">What is sgbv</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#"><div>
      <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
  What is SGBV
</button>
<div className="modal fade modal-dialog-scrollable modal-fullscreen-sm-down" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      SGBV stands for sexual and gender-based violence. It is a term used to describe any act of violence, threat, or coercion directed against a person because of their sex, gender, gender identity, or sexual orientation. This can include:

Physical violence: Hitting, kicking, slapping, choking, burning, or using weapons
Sexual violence: Rape, sexual assault, unwanted sexual touching, or exploitation
Psychological violence: Threats, intimidation, emotional abuse, or humiliation
Economic violence: Denying access to financial resources, sabotaging employment, or controlling access to property
Harmful traditional practices: Female genital mutilation (FGM), child marriage, forced marriage, or honor killings
SGBV is a serious and widespread problem that affects people of all ages, genders, and socioeconomic backgrounds. It has devastating consequences for individuals, families, and communities, including:

Physical and emotional harm: Pain, injury, disability, trauma, and mental health problems
Sexual and reproductive health problems: Unwanted pregnancy, sexually transmitted infections (STIs), and HIV/AIDS
Social and economic consequences: Loss of education, employment, and social status
Death: In extreme cases, SGBV can lead to death
If you or someone you know is experiencing SGBV, there are resources available to help. You can contact a hotline, seek professional help, or join a support group. It is important to remember that you are not alone and that help is available.
         </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div></a>
  </div>
</div>
      
    </div>
  )
}

export default Education