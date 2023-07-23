import express from "express";
import * as categorias from '../controllers/categorias.controller.js';
import Categoria from "../models/Categorias.js";

const router = express.Router();

router.route('/categorias')
.get(categorias.getCategorias)
.post(categorias.createCategoria);

export default router;