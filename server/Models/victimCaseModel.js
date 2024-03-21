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
      mediaEvidence: [String],
      reportedAt: {
        type: Date,
      },
    });
    
    const VictimCase = mongoose.model('Victim_Case', victimCaseSchema);
    
    module.exports = VictimCase;
