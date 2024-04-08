import { Schema } from "mongoose";


const photoSchema = new Schema({
    titel : {
        type: String,
        required: true,
    },
    path:{
        type:String,
    
    }
    
})

export const photosModel = module("photo" , photoSchema)