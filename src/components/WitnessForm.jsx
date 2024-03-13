import React from 'react'
import RangeInput from './RangeInput';

import VoiceRecorder from './AudioRecorder'


const WitnessForm = () => {
  return (
    <div className='container p-4'>
      <div>
        <h3 className='text-center mb-3'> Witness Form</h3>
      </div>
      <form className='row g-3'>
        <div>
        <div className="input-group mb-3 col-mb-4">
          <span className="input-group-text" id="inputGroup-sizing-default">Victim's Name:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3 col-mb-4">
          <span className="input-group-text" id="inputGroup-sizing-default">Abuser's Name:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3 col-mb-4">
          <span className="input-group-text" id="inputGroup-sizing-default">Location of Abuse:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3 ">
          <span className="input-group-text" id="inputGroup-sizing-default">Type of abuse:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          
        </div>
        <div className="mb-3">
        <label for="formFile" className="form-label">Add any evidence</label>
        <input className="form-control" type="file" id="formFile"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tell your your story</span>
          <textarea name="storyText" className="form-control" aria-label="With textarea" ></textarea>
        </div>

        <div>
          <VoiceRecorder/>
        </div>
      <div className=''>
       
      </div>
     
      </form>
      

    </div>
  )
}

export default WitnessForm