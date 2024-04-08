import { Schema } from "mongoose";


const photoSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    img:{
        type:String,
    
    }
    
} , {timestamps:true })

export const photosModel = module("Photo" , photoSchema)