import express from 'express'
const router = express.Router()

import ProdutoController from '../controllers/ProdutoController.js'

router.get('/', ProdutoController.index)
router.get('/cadastro', ProdutoController.cadastrar)
router.post('/salvar', ProdutoController.salvar)

export default router