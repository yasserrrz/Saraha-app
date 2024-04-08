import { Schema } from "mongoose";


const photoSchema = new Schema({
    tit : {
        type: String,
        required: true,
    },
    path:{
        type:String,
    
    }
    
})

export const photosModel = module("Photo" , photoSchema)