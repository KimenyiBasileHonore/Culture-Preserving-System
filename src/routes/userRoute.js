import  express from "express";
import userController from "../controllers/userController"
import { isAdmin } from "../middlewares/authentication";
import * as Validation from "../middlewares/validation/user";

const userRoute = express.Router();

userRoute.post('/signup', userController.signUp);
userRoute.get('/all', userController.getAllUsers );
userRoute.get('/registered-users-count', userController.getRegisteredUsersCount);
userRoute.get('/:id',  userController.getUserById);
userRoute.post('/login',  userController.login);
userRoute.delete('/delete/:id',  userController.deleteUser);
userRoute.post('/forgot-password', Validation.forgotPasswordValidation, userController.forgotpassword);
userRoute.post('/reset-password/:resetToken', Validation.resetPasswordValidation, userController.resetPassword);

export default userRoute;
