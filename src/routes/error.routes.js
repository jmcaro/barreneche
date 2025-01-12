import { Router } from 'express';
import { notFound, internalServerError } from '../controllers/error.controller.js';

const router = Router();

// Rutas de prueba para errores
router.get('/error/404', notFound);
router.get('/error/500', internalServerError);

export default router;