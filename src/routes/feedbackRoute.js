import express from 'express';
import feedbackController from '../controllers/feedbackController.js';
import { isAdmin } from '../middlewares/authentication.js';
import * as Validation from '../middlewares/validation/feedback.js';

const feedbackRoute = express.Router();

feedbackRoute.post('/feedback', Validation.feedbackValidation, feedbackController.submitFeedback);
feedbackRoute.get('/feedback', isAdmin, feedbackController.getAllFeedback);
feedbackRoute.get('/feedback/:id', isAdmin, feedbackController.getFeedbackById);
feedbackRoute.put('/feedback/:id/mark-as-seen', isAdmin, feedbackController.markFeedbackAsSeen);
feedbackRoute.put('/feedback/:id/mark-as-unseen', isAdmin, feedbackController.markFeedbackAsUnseen);

export default feedbackRoute;
