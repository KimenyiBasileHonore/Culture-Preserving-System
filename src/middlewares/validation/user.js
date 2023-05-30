import validator from "../../helpers/validator";
import userSignupSchema from "../../schemas/signup";
import userLoginSchema from "../../schemas/login";

export const userSignupValidation = (req, res, next) =>{
    validator (userSignupSchema, req.body, res, next);

};

export const userLoginValidation = (req, res, next) =>{
    validator (userLoginSchema, req.body, res, next);
};