import Joi from 'joi';

export default Joi.object({
  FirstName: Joi.string().min(2).required().error(new Error('Name must be at least 2 characters long.')),
  LastName: Joi.string().min(2).required().error(new Error('Name must be at least 2 characters long.')),
  email: Joi.string().email().required().error(new Error('Email must be a valid email.')),
  message: Joi.string().min(3).required().error(new Error('Message must be at least 3 characters long.')),
});
