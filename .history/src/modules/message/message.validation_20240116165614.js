import Joi from "joi";

export const  messageSchemaValidation = Joi.object({
    content:Joi.string().max(200),
    sendTo:Joi.string().hex().length(24).required()
})