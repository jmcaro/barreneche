import express from "express";
import Consulta from "../models/Consultas.js";
import * as consultas from '../controllers/consulta.controller.js';



const router = express.Router();
router.route("/consultas")
.get(consultas.getConsultas)
.post(consultas.createConsulta);


router.route("/consultas/:id")
.get(consultas.readConsulta)
.put(consultas.updateConsulta)
.delete(consultas.deleteConsulta);

export default router;