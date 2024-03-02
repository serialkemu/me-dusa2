import React, { useState } from 'react';
import VoiceRecorderComponent from './AudioRecorder';
import VideoMedia from './VideoMedia';

const VictimForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    abuserName: "",
    location: "",
    storyText: "",
    storyVideo: null,
    storyAudio: null,
    mediaEvidence: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleRecordingComplete = (blob) => {
    setFormData({ ...formData, storyVideo: blob });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('http://localhost:5001/cases/victimCase', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Success:', responseData);
        setFormData({
          abuserName: '',
          location: '',
          storyText: '',
          storyVideo: null,
          storyAudio: null,
          mediaEvidence: null
        });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='m-3 p-4'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Abuser's name</span>
          <input type="text" name="abuserName" className="form-control" placeholder="" aria-label="abuserName" value={formData.abuserName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="sgbvLocation">Location it took place</span>
          <input type="text" name="location" className="form-control" placeholder="Location" aria-label="sgbvLocation" value={formData.location} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div>
          <h4 className="text-center">Tell your Story In Anyway you want</h4>
          <hr/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tell your your story</span>
          <textarea name="storyText" className="form-control" aria-label="With textarea" value={formData.storyText} onChange={handleChange}></textarea>
        </div>
        <div className='' >
          <VoiceRecorderComponent onChange={handleFileChange} />
        </div>
        <div>
          <VideoMedia onRecordingComplete={handleRecordingComplete} />
        </div>
        <div className="input-group mt-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">Upload any media evidence</label>
          <input type="file" name="mediaEvidence" className="form-control" id="inputGroupFile01" onChange={handleFileChange} />
        </div>
        <button className='btn btn-success mt-2' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VictimForm;
