import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const VideoMedia = () => {
  const webcamRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoRecorder, setVideoRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const options = { mimeType: 'video/webm' };
      const videoRecorder = new MediaRecorder(stream, options);
      const chunks = [];

      videoRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      videoRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedVideoUrl(url);
      };

      videoRecorder.start();
      setIsRecording(true);
      setVideoRecorder(videoRecorder);
    } catch (err) {
      setError(err.message || 'Error accessing camera');
    }
  };

  const stopRecording = () => {
    videoRecorder.stop();
    setIsRecording(false);
  };

  const handleReset = () => {
    setRecordedChunks([]);
    setRecordedVideoUrl(null);
    setError(null); // Reset error state
  };

  const handleUpload = () => {
    // Implement video upload logic here (e.g., using fetch API)
    console.log('Implement video upload logic');
  };

  return (
    <div>
      <div>
        <h4>Video Recorder</h4>
        <p>Show us what you see</p>
      </div>
      {error && <div>{error}</div>}
      {recordedVideoUrl ? (
        <div>
          <video controls>
            <source src={recordedVideoUrl} type="video/webm" />
          </video>
          <button onClick={handleReset} className='btn btn-info'>Record Again</button>
          <button onClick={handleUpload} className='btn btn-info'>Upload Video</button>
        </div> 
      ) : (
        <div>
          {isRecording && (
            <Webcam
              audio={false}
              ref={webcamRef}
              mirrored={true}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '640px',
              }}
            />
          )}
          {!isRecording && !recordedVideoUrl && (
            <button onClick={startRecording} className='btn btn-info'>Start Recording</button>
          )}
          {isRecording && (
            <button onClick={stopRecording} className='btn btn-info'>Stop Recording</button>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoMedia;
