import React from 'react'
import MediaRecorderComponent from './VideoMedia';
import VoiceRecorderComponent from './VoiceRecorder';

const LiveReport = () => {
  return (
    <div>
      <h1>Report now</h1>
      <MediaRecorderComponent/>
      <VoiceRecorderComponent/>

    </div>
  )
}

export default LiveReport