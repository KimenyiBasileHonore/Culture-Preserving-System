import output from '../helpers/response';
import FeedbackServices from "../services/feedbackService";

class FeedbackController {
    static async submitFeedback(req, res) {
        try {
            const { FirstName,LastName, email, message } = req.body;
            const feedback = await FeedbackServices.createFeedback({ FirstName,LastName, email, message });
            return output(res, 201, 'Feedback submitted successfully', feedback);
        } catch (error) {
            return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }

    static async getAllFeedback(req, res) {
        try {
            const feedbackList = await FeedbackServices.getAllFeedback();
            return output(res, 200, 'All feedback retrieved successfully', feedbackList);
        } catch (error) {
            return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }

    static async getFeedbackById(req, res) {
        try {
            const feedbackId = req.params.id;
            const feedback = await FeedbackServices.getFeedbackById(feedbackId);

            if (!feedback) {
                return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
            }

            return output(res, 200, 'Feedback found successfully', feedback);
        } catch (error) {
            return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }
    
      static async markFeedbackAsSeen(req, res) {
        try {
          const feedbackId = req.params.id;
          const feedback = await FeedbackServices.getFeedbackById(feedbackId);
    
          if (!feedback) {
            return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
          }
    
          feedback.seen = true; // Mark the feedback as seen
          await feedback.save();
    
          return output(res, 200, 'Feedback marked as seen', feedback);
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
      }
    
      static async markFeedbackAsUnseen(req, res) {
        try {
          const feedbackId = req.params.id;
          const feedback = await FeedbackServices.getFeedbackById(feedbackId);
    
          if (!feedback) {
            return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
          }
    
          feedback.seen = false; // Mark the feedback as unseen
          await feedback.save();
    
          return output(res, 200, 'Feedback marked as unseen', feedback);
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
      }
    }
    
    export default FeedbackController;
    