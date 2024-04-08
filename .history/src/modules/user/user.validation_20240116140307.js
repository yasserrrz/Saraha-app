import Joi from "joi";


const signUpSchema = Joi.object({
    name : Joi.string().min(2).max(20)
})