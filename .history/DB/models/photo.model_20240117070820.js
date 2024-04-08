import { Schema, model } from "mongoose";


const photoSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    img:{
        type:String,
    
    }
    
} , {timestamps:true })

photoSchema

export const photosModel = model("Photo" , photoSchema)