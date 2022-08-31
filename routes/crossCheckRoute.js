const express = require('express');
const {
  crosscheckDriver,
  crossCheckBus,
} = require('../controllers/crossCheckController');

const router = express.Router();
router.route('/crosscheck/driver').post(crosscheckDriver);
router.route('/crosscheck/bus').post(crossCheckBus);

module.exports = router;
