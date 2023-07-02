import validator from "../../helpers/validator";
import userSignupSchema from "../../schemas/signup";
import userLoginSchema from "../../schemas/login";
import forgotPasswordSchema  from "../../schemas/forgotpassword";
import resetPasswordSchema  from "../../schemas/forgotpassword";

export const userSignupValidation = (req, res, next) =>{
    validator (userSignupSchema, req.body, res, next);

};

export const userLoginValidation = (req, res, next) =>{
    validator (userLoginSchema, req.body, res, next);
};

export const forgotPasswordValidation = (req, res, next) => {
    validator(forgotPasswordSchema, req.body, res, next);
  };
  
export const resetPasswordValidation = (req, res, next) => {
    validator(resetPasswordSchema, req.body, res, next);
  };