import React from 'react'
import MediaRecorderComponent from './MediaRecordingComponent';
import VoiceRecorderComponent from './VoiceRecorderComponent';

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