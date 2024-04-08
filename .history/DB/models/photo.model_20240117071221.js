import { Schema, model } from "mongoose";
import dote
dotenv.config({path:path.resolve('config/.env')})
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
    doc.img = process.env.BASE_URL + doc.img
})

export const photosModel = model("Photo" , photoSchema)