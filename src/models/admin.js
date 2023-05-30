import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true
    },
    emai: {
        type: String,
        required:true
    },
    
    phone:{
        type: Number,
        required:true
    },
    role: {
        type: String,
        default: 'admin',
      },
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;