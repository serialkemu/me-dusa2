const express = require('express');
const casesController = require('../Controllers/casesController');
const multer = require('multer');
const router = express.Router();

const witnessStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Uploads/witnesses');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

const victimStorage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, './Uploads/victims');
},
filename: function (req, file, cb) {
    cb(null, file.originalname);
}
});

const uploadWitness = multer({ storage: witnessStorage });
const uploadVictim = multer({ storage: victimStorage });

router.route('/victimCase').post(
    uploadVictim.array('mediaEvidence', 10),
    casesController.victimCaseEndpoint
  );

router.route('/witnessCase').post(
  uploadWitness.array('mediaEvidence', 10),
  casesController.witnessCaseEndpoint
);

module.exports = router;