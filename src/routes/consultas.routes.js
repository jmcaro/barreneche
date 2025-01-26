import express from "express";
import * as consultas from "../controllers/consulta.controller.js";
import * as user_consultation from "../controllers/user_consultation.controller.js";
import auth from "../middlewares/index.js";

const router = express.Router();
router.route("/consultas/create").get(consultas.createFormConsulta);
router
  .route("/consultas/assignconsultation")
  .get(consultas.getAssignConsultation);
router.route("/consultas/assign").post(consultas.assignUserConsultation);

router
  .route("/consultas")
  .get([auth.verifyToken || auth.isAdmin], consultas.getConsultas)
  .post([auth.verifyToken || auth.isProfe], consultas.createConsulta);

router
  .route("/consultas/:id")
  .get(consultas.readConsulta)
  .put(consultas.updateConsulta)
  .delete(consultas.deleteConsulta);

// Ruta para la revisión de las consultas asignadas a un usuario
router.route("/user_consultation").get(user_consultation.getUserConsultation);
router.route("/user_consultation/:id").get(user_consultation.reviewConsultation);

// Ruta para mostrar el formulario de edición
router.get("/consultas/edit/:id", consultas.readFormConsulta); // Reutilizamos `readConsulta` para mostrar la vista con los datos actuales

// Ruta para manejar la actualización
router.put("/consultas/edit/:id", consultas.updateConsulta);

export default router;
