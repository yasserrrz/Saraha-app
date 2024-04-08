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
    doc.img = process.env.BASE_URL
})

export const photosModel = model("Photo" , photoSchema)