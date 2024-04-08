import { string } from "joi";
import { Schema } from "mongoose";


const photoSchema = new Schema({
    titel : {
        type:string
    }
})