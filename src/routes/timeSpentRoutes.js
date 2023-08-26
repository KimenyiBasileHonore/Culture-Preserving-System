// routes/timeSpentRoutes.js
const express = require('express');
const router = express.Router();
const timeSpentController = require('../controllers/timeSpentController');

router.post('/track-time', timeSpentController.trackTotalTimeSpent);

module.exports = router;
