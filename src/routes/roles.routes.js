import express from "express";
import * as roles from '../controllers/rol.controller.js';



const router = express.Router();
router.route("/roles")
.get(roles.getRoles)
.post(roles.createRol);


router.route("/roles/:id")
.get(roles.readRol)
.put(roles.updateRol)
.delete(roles.deleteRol);

export default router;