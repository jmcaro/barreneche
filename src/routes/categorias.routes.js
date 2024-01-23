import express from "express";
import * as categorias from "../controllers/categorias.controller.js";
import auth from "../middlewares/index.js";

const router = express.Router();

router
  .route("/categorias")
  .get([auth.verifyToken, auth.isAdmin], categorias.getCategorias)
  .post(categorias.createCategoria);

router.route("/categorias/edit/:id").put(categorias.updateCategoria);
router.route("/categorias/delete/:id").get(categorias.deleteCategoria);

export default router;
