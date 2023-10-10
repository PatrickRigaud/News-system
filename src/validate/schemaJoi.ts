import Joi from 'joi';


export const schemaNews = Joi.object({
    colaborador: Joi.string()
    .required()
    .messages({
        'any.required': 'Erro: É necessário informar o Colaborador.'
    }),
    tema: Joi.string()
    .required()
    .messages({
        'any.required': 'Erro: É necessário informar o Tema.'
    }),
    caso: Joi.string()
    .required()
    .messages({
        'any.required': 'Erro: É necessário informar o Caso.'
    }),
    data: Joi.string()
    .required()
    .messages({
        'any.required': 'Erro: É necessário informar a Data.'
    }),
    dev: Joi.string(),
    chamado_envolvido: Joi.string(),
    feedback: Joi.string()
    })

    

