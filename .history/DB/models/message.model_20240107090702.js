import { Schema, model } from "mongoose";

const Schema = new Schema({
    name :{
        type :String , 
        required:true,
        lowercase:true,
        unique:true,
        minlength:2
    },
  
    confirmed:{
      type:Boolean,
      default:false
    }
},{timestamps:true});


export const Model = model('Message', Schema);

