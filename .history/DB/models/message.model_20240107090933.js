import { Schema, Types, model } from "mongoose";

const messageSchema = new Schema({
    content :{
        type :String , 
        required:true,
        
       
    },
    sendTo:{
        type: Types.ObjectId,
        ref:"User",
        required:true
    }
  
    :{
      type:Boolean,
      default:false
    }
},{timestamps:true});


export const messageModel = model('Message', messageSchema);

