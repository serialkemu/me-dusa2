import React from 'react'
import MediaRecorderComponent from './MediaRecordingComponent'

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
          <label for="customRange3" class="form-label">Urgency</label>
          <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
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