import { Schema } from "mongoose";


const photoSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    path:{
        type:String,
    
    }
    
} , {ti})

export const photosModel = module("Photo" , photoSchema)