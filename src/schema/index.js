import Joi from "joi";

export const cepSchema = Joi.object({
    CEP: Joi.string().trim().pattern(/^\d{5}-\d{3}$/).example('99999-999').required()
});