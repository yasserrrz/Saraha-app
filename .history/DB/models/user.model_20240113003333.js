import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    picture: {
        type: String
    },
    gender: {
        type: String,
        required: true,
        enum:["male" , "female"],
        default: "male"
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    role:{
        type:String,
        enum:
    }
}, { timestamps: true });


export const userModel = model('User', userSchema);

