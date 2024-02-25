import React from 'react'
import LiveReport from './LiveReport'

const Victim = () => {
  return (
    <div>
        <form method='post' >
            <h3 className='text-center'>Be free</h3>
            <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Do know the abuser ?</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="yes" id="yes" value="yes"/>
        <label className="form-check-label" htmlFor="yes">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="no" id="no" value="no"/>
        <label className="form-check-label" htmlFor="no">
          No
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="maybe" id="maybe" value="maybe"/>
        <label className="form-check-label" htmlFor="maybe">
          You can identify their face or name
        </label>
      </div>
    </div>
  </fieldset>
  <div className="row mb-3">
    <label htmlFor="abuserName" className="col-sm-2 col-form-label">Name of abuser</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="abuserName"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="sgbvLocation" className="col-sm-3 col-form-label">Location it took place</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="sgbvLocation"/>
    </div>
  </div>
  <div>
   
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-secondary ">Submit</button>

  </div>
  </form>   
    </div>
  )
}

export default Victim