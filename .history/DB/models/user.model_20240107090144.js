import { Schema } from "mongoose";

export const userSchema = new Schema({
    name :{
        type :String , 
        required:true,
        lowercase:true,
        unique:true,
        minlength:2
    },
    email:{
        ty
        required:true,
        unique:true,

    }
},{timestamps:true})