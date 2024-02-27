const mongoose = require('mongoose');

const victimCaseSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: true
      },
      typeOfAbuse: {
        type: String,
        // required: true
      },
      location: {
        type: String,
        // required: true
      },
      storyText: {
        type: String,
        // required: true
      },
      storyVideo: {
        type: String  // Assuming storing video URLs
      },
      storyAudio: {
        type: String  // Assuming storing audio URLs
      },
      mediaEvidence: {
        type: String  // Assuming storing document or media file URLs
      }
    });
    
    const VictimCase = mongoose.model('Victim_Case', victimCaseSchema);
    
    module.exports = VictimCase;