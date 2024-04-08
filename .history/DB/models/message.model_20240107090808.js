import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    content :{
        type :String , 
        required:true,
        
       
    },
    sendTo:{
        type
    }
  
    confirmed:{
      type:Boolean,
      default:false
    }
},{timestamps:true});


export const messageModel = model('Message', messageSchema);

