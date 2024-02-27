import React, { useState, useRef } from 'react';

const VideoMedia = ({ onSave }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleSave = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    onSave(blob); // Pass the recorded video to the parent component
    setRecordedChunks([]); // Clear recorded chunks after saving
  };

  return (
    <div className='video-container'>
      <div>You can record a video real quick</div>
      <div className='video-wrapper'>
        <video ref={videoRef} style={{ width: '300px' }} muted></video>
      </div>
      <div className='button-container'>
        {isRecording ? (
          <button onClick={stopRecording} className='btn btn-info'>Stop Recording</button>
        ) : (
          <>
            <button onClick={startRecording} className='btn btn-info'>Start Recording</button>
            {recordedChunks.length > 0 && (
              <button onClick={handlePreview} className='btn btn-primary'>Preview</button>
            )}
          </>
        )}
        <button onClick={handleSave} disabled={recordedChunks.length === 0} className='btn btn-success'>Save Recording</button>
      </div>
    </div>
  );
};

export default VideoMedia;
