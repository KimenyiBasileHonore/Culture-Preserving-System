import { generate,check  } from "../helpers/bcrypt";
import { sign } from "../helpers/jwt";
import output from '../helpers/response';
import UserServices from "../services/userService";

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
            user.password = undefined;
            const accessToken = sign({
                id: user._id, username: user.username, role: user.role, email:user.email
            });
            user._doc.accessToken = accessToken;
            return output(res, 201, 'Signup successfull', user)
            
        } catch (error) {
            return output (res, 500, error.message || error, null, 'SERVER_ERROR');
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
            const user = await UserServices.getSingleUser ({ $or: [{username: account}, {email: account}]});
            if(!user) {
                return output (res, 404, 'Username or email not registered', null, 'USER_NOT_FOUND');
            }
            if(!check(user.password, req.body.password)) {
                return output (res, 401, 'Wrong password ', null, 'UNAUTHORIZED' );
            }
            const accessToken = sign ({
                id: user.id, email: user.email, username: user.username, role:user.role
            });
            user.password= undefined;
            user.role= undefined;
            user._doc.accessToken= accessToken;
            return output (res, 200, 'login Successful', user);
            
        } catch (error) {
            return output(res, 500, error.message || error, null, 'SERVER_ERROR');
        }
    }

    static async deleteUser (req, res) {
        try {
            const user = await UserServices.getUserById(req.params.id);
            if (!user) {
                return output (res, 404, 'User not found',null,  'USER_NOT_FOUND');
            }
            if (user.role === "admin " && user.id === req.user.id) {
                return output (res, 403, 'Admini cannot delete their oun accounts ', null, 'FORBIDDEN');
            }
            if (!(user.role === "admin" && user.id === req.user.id) ) {
                return output (res, 403, 'You can not delete other\'s account ', null, 'FORBIDDEN');
                
            }

            await UserServices.deleteUser(req.params.id);
            return output (res, 200 , 'User deleted Successful', null);
        } catch (error) {
            return output (res, 500, error.message || error, null, 'SERVER_ERROR');
            
        }
    }
}

export default UserController;