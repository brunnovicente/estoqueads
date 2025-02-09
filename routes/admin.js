import express from 'express'
const router = express.Router()
import AdminController from "../controllers/AdminController.js"

router.get('/', AdminController.index)

export default router