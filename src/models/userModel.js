import mongoose from "mongoose";


// i dont khow it  needed or not 

// import { verify } from "crypto";
// import { unique } from "next/dist/build/utils";
// import { type } from "os";

const userSchema  = new mongoose.Schema({
   
    username: {
        type: String,
        required: [true , "please provide a username"],
        unique: true,
    } ,

    email: {
        type: String,
        required: [true , "please provide a email"],
        unique: true,
    },

    password : {
        type: String,
        required: [true , "please provide password"]

    },

    isVerfied: {
        type: Boolean ,
        default: false
    },

    isAdmin: {
        type:Boolean ,
        default : false
    },

    forgotPasswordToken: String ,
    forgetPasswordTokenExpiry : Date, 

    verifyToken: String , 
    verifyTokenExpiry: Date

})
 
const User = mongoose.models.users || mongoose.model("user" , userSchema )

export default User