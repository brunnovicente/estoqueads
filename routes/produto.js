import express from 'express'
const router = express.Router()
import ProdutoController from "../controllers/ProdutoController.js"
import {logado} from '../config/regras.js'

router.get('/', logado,ProdutoController.index)
router.get('/cadastrar', logado, (req, res) => {res.render('produto/cadastrar')})
router.post('/cadastrar', logado,ProdutoController.cadastrar)
router.get('/editar/:id', logado,ProdutoController.editar)
router.post('/salvar', logado,ProdutoController.salvar)
router.get('/excluir/:id', logado,ProdutoController.excluir)

export default router