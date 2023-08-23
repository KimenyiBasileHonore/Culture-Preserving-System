const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');


router.post('/feedback', feedbackController.createFeedback);
router.get('/feedback', feedbackController.getFeedbackList);
router.get('/feedback/count', feedbackController.getFeedbackCount);
router.put('/feedback/:id/mark-seen', feedbackController.markFeedbackAsSeen);
router.put('/feedback/:id/mark-unseen', feedbackController.markFeedbackAsUnseen);


module.exports = router;


// import express from 'express';
// import feedbackController from '../controllers/feedbackController.js';
// import { isAdmin } from '../middlewares/authentication.js';
// import * as Validation from '../middlewares/validation/feedback.js';

// const feedbackRoute = express.Router();

// feedbackRoute.post('/feedback', feedbackController.submitFeedback);
// feedbackRoute.get('/feedback',  feedbackController.getAllFeedback);
// feedbackRoute.get('/feedback/:id',  feedbackController.getFeedbackById);
// feedbackRoute.put('/feedback/:id/mark-as-seen',  feedbackController.markFeedbackAsSeen);
// feedbackRoute.put('/feedback/:id/mark-as-unseen',  feedbackController.markFeedbackAsUnseen);

// export default feedbackRoute;
