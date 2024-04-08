import Joi from "joi";

export const  messageSchemaValidation = Joi.object({
    content:Joi.string().min(1).max(200).required(),
    sendTo:Joi.string().hex().length(24).required()
})