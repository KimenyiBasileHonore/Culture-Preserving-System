import Feedback from "../models/feedback";

class FeedbackServices {
    static async getAllFeedback() {
        const feedbackList = await Feedback.find();
        return feedbackList;
    }

    static async createFeedback(feedbackData) {
        const feedback = await Feedback.create(feedbackData);
        return feedback;
    }

    static async getFeedbackById(feedbackId) {
        const feedback = await Feedback.findById(feedbackId);
        return feedback;
    }

}

export default FeedbackServices;
