import express from "express";
import {
  getAllResponses,
  viewResponse,
  createResponse,
  readFormResponse,
  assignResponse,
  editResponse,
  deleteResponse,
  addObservationResponse
} from "../controllers/response.controller.js";

const router = express.Router();

router.get("/responses", getAllResponses); // Obtener todas las respuestas
router.get("/responses/:id", viewResponse); // Ver una respuesta por ID
router.get("/responses/edit/:id", readFormResponse); // Crear una nueva respuesta
router.post("/responses/create", createResponse); // Crear una nueva respuesta
router.put("/responses/assign", assignResponse); // Asignar una respuesta a una consulta
router.put("/responses/add_observation", addObservationResponse); // Agregar una observación a una respuesta
router.put("/responses/:id", editResponse); // Editar una respuesta
router.delete("/responses/:id", deleteResponse); // Borrar una respuesta

export default router;
