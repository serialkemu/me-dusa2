const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const VictimCase = require('../Models/victimCaseModel');
const WitnessCase = require('../Models/witnessCaseModel');

exports.victimCaseEndpoint = asyncErrorHandler(async (req, res) => {
  try {
    const { userName, abuserName, typeOfAbuse, location, storyText } = req.body;

    const mediaEvidenceFiles = req.files || [];
    const mediaEvidencePaths = mediaEvidenceFiles.map(file => file.path);

    const victimCase = await VictimCase.create({
      userName,
      abuserName,
      typeOfAbuse,
      location,
      storyText,
      mediaEvidence: mediaEvidencePaths,
      reportedAt: currentTime.toISOString(), 
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

exports.witnessCaseEndpoint = asyncErrorHandler(async (req, res) => {
  try {
    const { victimName, abuserName, location, typeOfAbuse, urgency, backgroundStory } = req.body;

    const mediaEvidenceFiles = req.files || [];
    const mediaEvidencePaths = mediaEvidenceFiles.map(file => file.path);

    const witnessCase = await WitnessCase.create({
      victimName,
      abuserName,
      location,
      typeOfAbuse,
      urgency,
      backgroundStory,
      mediaEvidence: mediaEvidencePaths,
      reportedAt: currentTime.toISOString(), 
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

exports.viewVictimCases = async(req, res) => {
  try{
    const victimCases = await VictimCase.find();

    res.status(200).json({
      status:'success',
      casesCount: victimCases.length,
      data:{
        victimCases,
      }
    })
  }catch(error){
    res.status(404).json({
      status:'Fail',
      message: `An error occurred while trying to fetch victim cases ` + error.message,
  })
}
}

exports.viewWitnessCases = async(req, res) =>{
  try{
    const witnessCases = await WitnessCase.find();

    res.status(200).json({
      status:'success',
      casesCount: witnessCases.length,
      data:{
        witnessCases,
      }
    })
  }catch(error){
    res.status(404).json({
      status:'Fail',
      message: `An error occurred while trying to fetch witness cases ` + error.message,
  })
}
}