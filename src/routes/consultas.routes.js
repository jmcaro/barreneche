import express from "express";
import * as consultas from '../controllers/consulta.controller.js';
import auth from '../middlewares/index.js';



const router = express.Router();
router.route("/consultas")
.get([auth.verifyToken || auth.isAdmin],consultas.getConsultas)
.post([auth.verifyToken || auth.isProfe],consultas.createConsulta);


router.route("/consultas/:id")
.get(consultas.readConsulta)
.put(consultas.updateConsulta)
.delete(consultas.deleteConsulta);

export default router;