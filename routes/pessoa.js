import express from "express";
const router = express.Router();
import PessoaController from "../controllers/PessoaController.js";
import {logado} from '../config/regras.js'

router.get('/', logado,PessoaController.index);
router.get('/cadastrar', logado,(req, res) => res.render('pessoa/cadastrar'));
router.post('/cadastrar', logado,PessoaController.cadastrar);

export default router;