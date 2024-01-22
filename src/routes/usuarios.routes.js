import { Router } from "express";
import * as usuarios from "../controllers/usuarios.controller.js";

const router = Router();

router
  .route("/usuarios")
  .get(usuarios.getUsuarios)
  .post(usuarios.createUsuario);

router
  .route("/usuarios/:id")
  .get(usuarios.formUpdateUsuario)
  .put(usuarios.updateUsuario);

router.route("/usuarios/delete/:id").get(usuarios.deleteUsuario);

export default router;
