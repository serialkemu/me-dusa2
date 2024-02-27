import React from 'react'
import MediaRecorderComponent from './MediaRecordingComponent';
import RangeInput from './RangeInput';

const WitnessForm = () => {
  return (
    <div>
      WitnessForm
      <form className='row g-3'>
        <div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Victim's Name:</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Abuser's Name:</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Location of Abuse:</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Type of abuse:</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div>
            
          </div>
        </div>
      </form>
      <div class="mb-3">
        <label for="formFile" class="form-label">Add any evidence</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>
      <div>
        <MediaRecorderComponent/>
      </div>
    </div>
  )
}

export default WitnessForm