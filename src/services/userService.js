import User from "../models/user";

class UserServices {
    static async getAllusers() {
        const Users = await User.find().select('-password');
        return Users;
    }

    static async createUser(userData) {
        const user = await User.create(userData);
        return user;
    }

    static async getRegisteredUsersCount() {
        const users = await User.find({ role: "user" });
        return users.length;
      }

    static async getUserById (userId) {
        const user = await User.findById(userId);
        return user;
    }

    static async getSingleUser (query) {
        const user = await User.findOne(query);
        return user;
    }

    static async updateUser (userId, userData) {
        const user = await User.findByIdAndUpdate(userId, userData, { new: true});
        return user;
    }

    static async deleteUser (userId) {
        const user = await User.findByIdAndDelete(userId);
        return user;
    }
}

export default UserServices;