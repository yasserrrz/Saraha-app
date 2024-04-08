import Joi from "joi";

export const  messageSchemaValidation = Joi.object({
    content:,
    sendTo:Joi.string().hex().length(24).required()
})