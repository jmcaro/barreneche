import { Router } from "express";
import * as auth from '../controllers/auth.controller.js';
 

const router = Router();

router.route('/signin').post(auth.signIn);
router.route('/signup').post(auth.signUp);

export default router;