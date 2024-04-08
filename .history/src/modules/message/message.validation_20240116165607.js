import Joi from "joi";

export const  messageSchemaValidation = Joi.object({
    content:Joi.string().ma,
    sendTo:Joi.string().hex().length(24).required()
})