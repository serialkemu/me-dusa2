const express = require('express');
const router = express.Router();
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const VictimCase = require('../Models/victimCaseModel');
const WitnessCase = require('../Models/witnessCaseModel')

// Endpoint to add victims case
exports.victimCaseEndpoint= asyncErrorHandler (async (req, res) => {
  try {
    const { userName, typeOfAbuse, location, storyText, storyVideo, storyAudio, mediaEvidence } = req.body;

    const victimCase = await VictimCase.create({
      userName,
      typeOfAbuse,
      location,
      storyText,
      storyVideo,
      storyAudio,
      mediaEvidence
    });

    console.log(victimCase);

    return res.status(201).json({
      status: 'Success',
      data: {
        victimCase
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Validation Error:', error.errors);
    }

    return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error. ' + error.message
    });
  }
});

// Endpoint to add victim report
exports.witnessCaseEndpoint= asyncErrorHandler (async (req, res) => {
  try {
    const { victimName, abuserName, location, typeOfAbuse, urgency, backgroundStory, backgroundAudio, mediaEvidence } = req.body;

    const witnessCase = await WitnessCase.create({
      victimName,
      abuserName,
      location,
      typeOfAbuse,
      urgency,
      backgroundStory,
      backgroundAudio,
      mediaEvidence
    });

    console.log(witnessCase);

    return res.status(201).json({
      status: 'Success',
      data: {
        witnessCase
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Validation Error:', error.errors);
    }

    return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error. ' + error.message
    });
  }
});
