import { Button } from 'bootstrap'
import React from 'react'

const Info = ({carTitle,carLink,cardis}) => {
  return (
    <div className="col" style={{height:'25rem', width:'20rem'}}>
    <div className="card h-100 bg-success">
      <div className="card-body">
        <h5 className="card-title">{carTitle}</h5>
        <p>{cardis}</p>
        <button className="card-text btn btn-secondary"><a href={carLink}>READ MORE</a></button>
      </div>
      <hr/>
      <div class="cardkking-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
 
  )
}


const Information = () => {
  return (
    <div className=' d-flex justify-content-center'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Info carTitle='warning signs of sgbv' cardis=''/>
          <Info carTitle='Laws on SGBV' cardis=''/>
          <Info carTitle='Statistics on SGBV' cardis='Over 40% of women in Kenya have experienced physical or sexual violence from an intimate partner in their lifetime, according to the Kenya Demographic and Health Survey (KDHS)'/>
          <Info carTitle='' cardis='' />
 

          </div>
    </div>
  )
}

export default Information