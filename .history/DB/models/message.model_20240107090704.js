import { Schema, model } from "mongoose";

const mSchema = new Schema({
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


export const mModel = model('Message', mSchema);

