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

photoSchema.post("init", function(doc){
    doc.img = 
})

export const photosModel = model("Photo" , photoSchema)