import express from "express";
import * as roles from "../controllers/rol.controller.js";

const router = express.Router();

router.route("/roles").get(roles.getRoles).post(roles.createRol);

router.route("/roles/create").get(roles.formCreateRol);

router.route("/roles/edit/:id").put(roles.updateRol);
router.route("/roles/delete/:id").get(roles.deleteRol);

export default router;
