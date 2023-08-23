import { generate,check  } from "../helpers/bcrypt";
import { sign } from "../helpers/jwt";
import output from '../helpers/response';
import UserServices from "../services/userService";
import nodemailer from "nodemailer";
import User from "../models/user";

const transporter = nodemailer.createTransport({
    service:"kimbasile23@gmail.com",
    auth: {
        user:"kimbasile23@gmail.com",
        pass:"Honoree@1",
    },
})

class UserController {
    static async signUp(req, res){
        try {
            const { username, email } = req.body;
            const userExist = await UserServices.getSingleUser({ $or: [{username}, {email}]});
            if (userExist) {
                return output(res, 409, 'username or email is taken', null, 'USER_XIST' );
            }
            req.body.password = await generate(req.body.password);
            const user = await UserServices.createUser({ ...req.body});
            // user.password = undefined;
            // const accessToken = sign({
            //     id: user._id, username: user.username, role: user.role, email:user.email
            // });
            // user._doc.accessToken = accessToken;
            res.status(200).json({message:"successfully saved"})
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getAllUsers (req, res) {
        try {
            const users = await UserServices.getAllusers();
            return output (res, 200, 'all user are displayed', users);
            
        } catch (error) {
          return output (res, 500, error.message || error, null, 'SERVER_ERROR');  
        }
    }

    static async getRegisteredUsersCount(req, res) {
        try {
          const users = await UserServices.getAllusers();
          const registeredUsersCount = users.filter(user => user.role === "user").length;
          return output(res, 200, 'Registered users count retrieved successfully', { count: registeredUsersCount });
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
      }

    static async getRegisteredUsersCount(req, res) {
        try {
          const users = await UserServices.getAllusers();
          const registeredUsersCount = users.filter(user => user.role === "user").length;
          return output(res, 200, 'Registered users count retrieved successfully', { count: registeredUsersCount });
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
      }
      
      

    static async getUserById (req, res) {
        try {
            const user = await UserServices.getUserById(req.params.id);
            if (!user) {
                return output (res, 404, 'User not found ', null,'USER_NOT_FOUND' );
            }
            return output (res, 200, 'Uer found Successful', user )
        } catch (error) {
            return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }

    static async login (req, res) {
        try {
            const { account } =req.body;
            console.log(req.body)
            try {
                const data = await User.findOne({email:req.body.account})
                if(!check(data.password, req.body.password)) {
                    res.status(401).json({"message":"password doesnt match"})
                }
                else{
                    const accessToken = sign ({
                        id: data.id, email: data.email, username: data.username, role:data.role
                    });
                    data.password= undefined;
                    data._doc.accessToken= accessToken;
                    res.status(200).json({"token":accessToken,'role':data.role})
                }

            } catch (error) {
                console.log(error)
                res.status(404).json({"message":"user not found"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    static async deleteUser(req, res) {
        try {
          const user = await UserServices.getUserById(req.params.id);
          if (!user) {
            return output(res, 404, 'User not found', null, 'USER_NOT_FOUND');
          }
      
          await UserServices.deleteUser(req.params.id);
          return output(res, 200, 'User deleted successfully', null);
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
      }
      

    static async forgotpassword (req, res ){
        try {
            const {email} = req.body
            const user = await UserServices.getSingleUser ({email});
            if (!user) {
                return output (res, 404, 'Email not registerd',null,'EMAIL_NOT_FOUND');
            }

            const resetToken = generateResetToken();
            user.resetToken = resetToken ;
            user.resetTokenExpiry = Date.now() + 3600000;
            await user.save();

            const mailOptions = {
                from: "kimbasile23@gmail.com",
                to :email,
                subject:"Password Reset",
                Text:`Hello ${user.username},\n\nYou have requested a password reset. Please click on the following link to reset your password:\n\n${resetToken}`
            };
            await transporter.sendMail(mailOptions);

            return output(res,200, 'Password Reset instractions sent to your email',null);

            
        } catch (error) {
            return output (res,500,' error.message' || error,null,'SERVER_ERRO');
            
        }
    }

    static async resetPassword(req, res) {
        try {
          const { resetToken } = req.params;
          const { password } = req.body;
    
          const user = await UserServices.getSingleUser({ resetToken, resetTokenExpiry: { $gt: Date.now() } });
          if (!user) {
            return output(res, 404, 'Invalid or expired reset token', null, 'INVALID_RESET_TOKEN');
          }
    
          const newPassword = await generate(password);
    
          user.password = newPassword;
          user.resetToken = undefined;
          user.resetTokenExpiry = undefined;
          await user.save();
    
          const accessToken = sign({
            id: user._id, username: user.username, role: user.role, email: user.email
          });
    
          user.password = undefined;
          user._doc.accessToken = accessToken;
    
          return output(res, 200, 'Password reset successful', user);
        } catch (error) {
          return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }
}

export default UserController;
