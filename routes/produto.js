import express from 'express'
const router = express.Router()

import ProdutoController from '../controllers/ProdutoController'

router.get('/', ProdutoController.index)

export default router