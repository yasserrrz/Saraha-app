import Joi from "joi";
import emailTemp from "../../email/emailTemp";


const signUpSchema = Joi.object({
    name : Joi.string().min(2).max(20).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-Z][a-z0-9#$@]{8,20}$/)
})