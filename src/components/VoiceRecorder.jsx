import React, { useState } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    audioStream.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  const handleDataAvailable = (event) => {
    setAudioChunks([...audioChunks, event.data]);
  };

  const downloadRecording = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(audioBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recording.wav';
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h4>Audio Recorder</h4>
      <p>Tell using your own words</p>
      <div>
        {isRecording ? (
          <button onClick={stopRecording} className='btn btn-info'>Stop Recording</button>
        ) : (
          <button onClick={startRecording} className='btn btn-info'>Start Recording</button>
        )}
        {audioChunks.length > 0 && (
          <button onClick={downloadRecording} className='btn btn-info'>Download Recording</button>
        )}
      </div>
    </div>
  );
};

export default AudioRecorder;
