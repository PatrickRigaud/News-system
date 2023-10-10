import { listarNewsQuery, cadastrarNewsQuery, buscarUmaNewsQuery, editarUmaNewsQuery, filtrarPalavrasChavesQuery, deletarNewsQuery} from "../data/news_data"
import { Request, Response } from 'express';


export const listarNews = async (req: Request, res: Response) => {
    try {
        const listaNews = await listarNewsQuery()
        
       return res.status(200).json(listaNews)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
    
}

export const buscarUmaNews = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const buscarNews = await buscarUmaNewsQuery(Number(id))
    
       return res.status(200).json(buscarNews)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
    
}


export const cadastrarNews = async (req: Request, res: Response) => {
    try {
        const {colaborador, tema, caso, data, dev, chamado_envolvido, feedback} = req.body

    await cadastrarNewsQuery({colaborador, tema, caso, data, dev, chamado_envolvido, feedback})

    
    return res.status(201).json({message: 'News cadastrada com sucesso'})

    }catch (error) {
    console.log(error)
    return res.status(400).json({message: error})
    }
}

export const editarNews = async (req: Request, res: Response) => {
    try {
        const {id, colaborador, tema, caso, data, dev, chamado_envolvido, feedback} = req.body
    
        const queryEncontrada = await buscarUmaNewsQuery(id)
        if(queryEncontrada.length === 0){
            return res.status(404).json({message: "News não encontrada"})
        }

        await editarUmaNewsQuery({colaborador, tema, caso, data, dev, chamado_envolvido, feedback}, id)

        return res.status(204).json()
    
    } catch (error) {
    console.log(error)
    return res.status(400).json({message: error})
    }
}

type PalavraChave = [];

export const filtrarPalavrasChaves = async (req: Request, res: Response) => {
    try {
        const {filtro} = req.query
        const casosEncontrados = await filtrarPalavrasChavesQuery(filtro as PalavraChave)


        return res.status(201).json(casosEncontrados)
    } catch (error) {
    console.log(error)
    return res.status(400).json({message: error})
    }
}

export const deletarNews = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const encontrou = await deletarNewsQuery(Number(id))
       
        encontrou.length > 0 ? res.status(204).json() : res.status(400).json({message: 'News não encontrada'})
        

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}