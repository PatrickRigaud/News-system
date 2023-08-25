import express from 'express'
export const router = express()
import { listarNews, cadastrarNews, buscarUmaNews } from '../controladores/controladores'



router.get('/listar', listarNews)
router.get('/buscar/:id', buscarUmaNews)
router.post('/cadastrar', cadastrarNews)




