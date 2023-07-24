import { Router } from "express";
import * as usuarios from '../controllers/usuarios.controller.js';

const router = Router();

router.route('/usuarios')
.get(usuarios.getUsuarios)
.post(usuarios.createUsuario);

router.route('/usuarios/:id')
.get(usuarios.readUsuarios)
.put(usuarios.updateUsuario)
.delete(usuarios.deleteUsuario);

export default router;
