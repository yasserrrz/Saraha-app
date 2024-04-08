import { Schema } from "mongoose";


const photoSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    path:{
        type:String,
    
    }
    
} , {timestamps})

export const photosModel = module("Photo" , photoSchema)