import { Schema } from "mongoose";


const photoSchema = new Schema({
    titel : {
        type: String,
        required: true,
    },
    path:{
        type:String,
        req
    }
    
})