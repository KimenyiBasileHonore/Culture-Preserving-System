// ../../schemas/ibisakuzo.js
import Joi from 'joi';

const ibisakuzoSchema = Joi.object({
  // Define the validation rules for the ibisakuzo route here
  // For example:
  question: Joi.string().required(),
  answers: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      text: Joi.string().required(),
      isCorrect: Joi.boolean().required(),
    })
  ).min(2).required(),
});

export default ibisakuzoSchema;
