import express from "express";
import * as categorias from '../controllers/categorias.controller.js';
import { verifyToken } from "../middlewares/index.js";

const router = express.Router();

router.route('/categorias')
.get(verifyToken,categorias.getCategorias)
.post(categorias.createCategoria);

export default router;