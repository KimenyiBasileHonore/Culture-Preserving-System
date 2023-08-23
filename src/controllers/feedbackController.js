const Feedback = require('../models/feedback');

const createFeedback = async (req, res) => {
  try {
    const feedbackData = req.body;
    const feedback = new Feedback(feedbackData);
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'An error occurred while submitting feedback' });
  }
};

const getFeedbackCount = async (req, res) => {
  try {
    const feedbackCount = await Feedback.countDocuments(); // Count the documents in the Feedback collection
    res.status(200).json({ count: feedbackCount });
  } catch (error) {
    console.error('Error getting feedback count:', error);
    res.status(500).json({ error: 'An error occurred while getting feedback count' });
  }
};

const getFeedbackList = async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ submissionDate: -1 });
    res.status(200).json(feedbackList);
  } catch (error) {
    console.error('Error getting feedback list:', error);
    res.status(500).json({ error: 'An error occurred while getting feedback list' });
  }
};

const markFeedbackAsSeen = async (req, res) => {
  const feedbackId = req.params.id;

  try {
    const feedback = await Feedback.findById(feedbackId);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    feedback.isSeen = true;
    await feedback.save();

    res.status(200).json({ message: 'Feedback marked as seen' });
  } catch (error) {
    console.error('Error marking feedback as seen:', error);
    res.status(500).json({ error: 'An error occurred while marking feedback as seen' });
  }
};

const markFeedbackAsUnseen = async (req, res) => {
  const feedbackId = req.params.id;

  try {
    const feedback = await Feedback.findById(feedbackId);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    feedback.isSeen = false;
    await feedback.save();

    res.status(200).json({ message: 'Feedback marked as unseen' });
  } catch (error) {
    console.error('Error marking feedback as unseen:', error);
    res.status(500).json({ error: 'An error occurred while marking feedback as unseen' });
  }
};

module.exports = { createFeedback, getFeedbackList, markFeedbackAsSeen, markFeedbackAsUnseen, getFeedbackCount };



// import output from '../helpers/response';
// import FeedbackServices from "../services/feedbackService";

// class FeedbackController {
//     static async submitFeedback(req, res) {
//         try {
//             const { FirstName,LastName, email, message } = req.body;
//             const feedback = await FeedbackServices.createFeedback({ FirstName,LastName, email, message });
//             return output(res, 201, 'Feedback submitted successfully', feedback);
//         } catch (error) {
//             return output(res, 500, error.message || error, null, 'SERVER_ERROR');
//         }
//     }

//     static async getAllFeedback(req, res) {
//         try {
//             const feedbackList = await FeedbackServices.getAllFeedback();
//             return output(res, 200, 'All feedback retrieved successfully', feedbackList);
//         } catch (error) {
//             return output(res, 500, error.message || error, null, 'SERVER_ERROR');
//         }
//     }

//     static async getFeedbackById(req, res) {
//         try {
//             const feedbackId = req.params.id;
//             const feedback = await FeedbackServices.getFeedbackById(feedbackId);

//             if (!feedback) {
//                 return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
//             }

//             return output(res, 200, 'Feedback found successfully', feedback);
//         } catch (error) {
//             return output(res, 500, error.message || error, null, 'SERVER_ERROR');
//         }
//     }
    
//       static async markFeedbackAsSeen(req, res) {
//         try {
//           const feedbackId = req.params.id;
//           const feedback = await FeedbackServices.getFeedbackById(feedbackId);
    
//           if (!feedback) {
//             return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
//           }
    
//           feedback.seen = true; // Mark the feedback as seen
//           await feedback.save();
    
//           return output(res, 200, 'Feedback marked as seen', feedback);
//         } catch (error) {
//           return output(res, 500, error.message || error, null, 'SERVER_ERROR');
//         }
//       }
    
//       static async markFeedbackAsUnseen(req, res) {
//         try {
//           const feedbackId = req.params.id;
//           const feedback = await FeedbackServices.getFeedbackById(feedbackId);
    
//           if (!feedback) {
//             return output(res, 404, 'Feedback not found', null, 'FEEDBACK_NOT_FOUND');
//           }
    
//           feedback.seen = false; // Mark the feedback as unseen
//           await feedback.save();
    
//           return output(res, 200, 'Feedback marked as unseen', feedback);
//         } catch (error) {
//           return output(res, 500, error.message || error, null, 'SERVER_ERROR');
//         }
//       }
//     }
    
//     export default FeedbackController;
    