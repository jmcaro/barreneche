import { Router } from 'express';
import {
  getAll,
  getCualifications,
  createForm,
  create,
  editForm,
  update,
  deleteCualification
} from '../controllers/cualification.controller.js';

const router = Router();
//router.get('/cualifications', getAll);
router.get('/cualifications', getCualifications);
router.get('/cualifications/create', createForm);
router.post('/cualifications/create', create);
router.get('/cualifications/edit/:id', editForm);
router.put('/cualifications/edit/:id', update);
router.get('/cualifications/delete/:id', deleteCualification);

export default router;