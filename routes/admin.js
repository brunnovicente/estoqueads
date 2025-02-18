import express from 'express'
const router = express.Router()
import AdminController from "../controllers/AdminController.js"
import {logado} from '../config/regras.js'

router.get('/', logado, AdminController.index)

export default router