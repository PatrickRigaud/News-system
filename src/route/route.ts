import express from 'express'
export const router = express()
import { listarNews, cadastrarNews, buscarUmaNews, editarNews, filtrarPalavrasChaves, deletarNews } from '../controladores/controladores'
import { validarDadosRequisicao } from '../controladores/intermediario'
import { schemaNews } from '../validate/schemaJoi'

router.get('/listar', listarNews)
router.get('/buscar/:id', buscarUmaNews)
router.post('/cadastrar', validarDadosRequisicao(schemaNews), cadastrarNews)
router.put('/editar', editarNews)
router.get('/filtrar', filtrarPalavrasChaves)
router.delete('/deletar/:id', deletarNews)




