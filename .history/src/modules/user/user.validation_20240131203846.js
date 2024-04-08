import { json } from "express";
import Joi from "joi";



export const signUpSchemaValidation = Joi.object({
    name : Joi.string().min(2).max(20).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-Z][a-z0-9#$@]{8,20}$/),
    repassword: Joi.valid(Joi.ref("password")).required(),
    age:Joi.number().integer().min(10).max(80),
    gender: Joi.string(),
    role:Joi.string(),

});
export const signInSchemaValidation = Joi.object({
   
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-Z][a-z0-9#$@]{8,20}$/),
   
    
})

export const paramsValidation = Joi.object({
    id:Joi.string().hex().length(24).required()
})