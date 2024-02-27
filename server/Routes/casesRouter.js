const express = require('express');
const casesController = require('../Controllers/casesController');

const router = express.Router();


router.route('/victimCase').post(casesController.victimCaseEndpoint);
router.route('/witnessCase').post(casesController.witnessCaseEndpoint);


module.exports = router;