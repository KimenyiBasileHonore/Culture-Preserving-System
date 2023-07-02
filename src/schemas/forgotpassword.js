import Joi from 'joi';

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().error(new Error('Email must be a valid email')),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).required().error(new Error('Password must be at least 6 characters long')),
});
