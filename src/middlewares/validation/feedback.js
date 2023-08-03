import validator from "../../helpers/validator";
import feedbackSchema from "../../schemas/feedback";

export const feedbackValidation = (req, res, next) => {
  validator(feedbackSchema, req.body, res, next);
};
