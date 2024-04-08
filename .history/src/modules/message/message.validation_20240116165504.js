import Joi from "joi";

export const  messageSchemaValidation = Joi.object({
    content:Joi,
    sendTo:Joi.string().hex().length(24).required()
})