import { Schema } from "mongoose";


const photoSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    path:{
        type:String,
    
    }
    
} , {timestamps:true })

export const photosModel = module("Photo" , photoSchema)