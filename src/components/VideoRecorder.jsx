import React, { useState, useRef } from 'react';

const VoiceRecorderComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const audioRef = useRef();

  const startRecording = async () => {
    try {
      // Request access to the microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioRef.current.srcObject = stream;

      // Initialize MediaRecorder
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
    mediaRecorder.stop();
    audioRef.current.srcObject.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  const playRecording = () => {
    setIsPlaying(true);
    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    audioRef.current.play();
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const submitRecording = () => {
    // Here you can implement logic to submit the recording
    console.log('Recording submitted');
  };

  return (
    <div>
      <audio ref={audioRef} controls style={{ width: '300px' }}></audio>
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
        {!isRecording && (
          <>
            {isPlaying ? (
              <button onClick={stopPlaying}>Stop Playing</button>
            ) : (
              <button onClick={playRecording}>Play Recording</button>
            )}
            <button onClick={submitRecording}>Submit Recording</button>
          </>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorderComponent;
