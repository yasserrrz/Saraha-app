import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    content :{
        type :String , 
        required:true,
        lowercase:true,
        unique:true,
       
    },
  
    confirmed:{
      type:Boolean,
      default:false
    }
},{timestamps:true});


export const messageModel = model('Message', messageSchema);

