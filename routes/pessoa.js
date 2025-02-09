import express from "express";
const router = express.Router();
import PessoaController from "../controllers/PessoaController.js";

router.get('/', PessoaController.index);
router.get('/cadastrar', (req, res) => res.render('pessoa/cadastrar'));
router.post('/cadastrar', PessoaController.cadastrar);

export default router;