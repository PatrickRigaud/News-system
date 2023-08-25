import { listarNewsQuery, cadastrarNewsQuery, buscarUmaNewsQuery } from "../data/news_data"
import { Request, Response } from 'express';


export const listarNews = async (req: Request, res: Response) => {
    try {
        const listaNews = await listarNewsQuery()
    
       return res.status(200).json(listaNews.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
    
}

export const buscarUmaNews = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const buscarNews = await buscarUmaNewsQuery(Number(id))
    
       return res.status(200).json(buscarNews.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
    
}


export const cadastrarNews = async (req: Request, res: Response) => {
    try {
        const {colaborador, tema, caso, dev, chamado, data, observacao} = req.body

    await cadastrarNewsQuery(colaborador, tema, caso, dev, chamado, data, observacao)

    
    return res.status(201).json({message: 'News cadastrada com sucesso'})

    }catch (error) {
    console.log(error)
    return res.status(400).json({message: error})
    }
}

export const editarNews = async (req: Request, res: Response) => {
    try {
        const {colaborador, tema, caso, dev, chamado, data, observacao} = req.body
    
        
    
    
    
    
    } catch (error) {
        
    }
}