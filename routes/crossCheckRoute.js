const express = require('express');
const { crosscheckDriver } = require('../controllers/crossCheckController');

const router = express.Router();
router.route('/crosscheck/driver').post(crosscheckDriver);

module.exports = router;
