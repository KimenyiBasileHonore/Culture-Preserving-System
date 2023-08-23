import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    
    username: {
        type:String,
        unique:true
    },
    fullname:{
        type:String
    },
    phone: {
        type: Number,
       
    },
    
    email: {
        type: String,
        required:true,
        unique: true
       
    },
    role: {
        type: String,
    },
    
    password: {
        type: String,
        
    },
});

const User = mongoose.model('User', userSchema)

export default User