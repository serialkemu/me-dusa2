const mongoose = require('mongoose');

const witnessCaseSchema = new mongoose.Schema({
  victimName: {
    type: String,
    required: true
  },
  abuserName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  typeOfAbuse: {
    type: String,
    required: true
  },
  urgency: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  backgroundStory: {
    type: String  // Assuming storing background story as text
  },
  mediaEvidence: [String],
  reportedAt: {
    type: Date,
  },
});

const WitnessCase = mongoose.model('Witness_Case', witnessCaseSchema);

module.exports = WitnessCase;
