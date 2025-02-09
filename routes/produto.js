import express from 'express'
const router = express.Router()
import ProdutoController from "../controllers/ProdutoController.js"

router.get('/', ProdutoController.index)
router.get('/cadastrar', (req, res) => {res.render('produto/cadastrar')})
router.post('/cadastrar', ProdutoController.cadastrar)
router.get('/editar/:id', ProdutoController.editar)
router.post('/salvar', ProdutoController.salvar)
router.get('/excluir/:id', ProdutoController.excluir)

export default router