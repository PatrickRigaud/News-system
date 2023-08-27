import express from 'express'
export const router = express()
import { listarNews, cadastrarNews, buscarUmaNews, editarNews, filtrarPalavrasChaves, deletarNews } from '../controladores/controladores'



router.get('/listar', listarNews)
router.get('/buscar/:id', buscarUmaNews)
router.post('/cadastrar', cadastrarNews)
router.put('/editar', editarNews)
router.get('/filtrar', filtrarPalavrasChaves)
router.delete('/deletar/:id', deletarNews)




