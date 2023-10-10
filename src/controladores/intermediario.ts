import { Request, Response, NextFunction } from "express";
import Joi from 'joi';


interface JoiSchema {
    id: string,
}

export const validarDadosRequisicao = (joiSchema: Joi.ObjectSchema<JoiSchema>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await joiSchema.validateAsync(req.body)
        next()

    } catch (error:any) {
        res.json({message: error.message})
    }
}
