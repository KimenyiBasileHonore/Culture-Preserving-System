import validator from "../../helpers/validator";
import ibisakuzoSchema from "../../schemas/ibisakuzo";

export const ibisakuzoValidation = (req, res, next) => {
  validator(ibisakuzoSchema, req.body, res, next);
};
