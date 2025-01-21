import express from 'express'
const router = express.Router()

import ProdutoController from '../controllers/ProdutoController.js'

router.get('/', ProdutoController.index)

export default router