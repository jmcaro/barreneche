import { Router } from "express";
import * as auth from '../controllers/auth.controller.js';
 

const router = Router();

router.route('/signin').post(auth.signIn);
router.route('/signup').post(auth.signUp);
router.route('/login').get(auth.login);
router.route('/register').get(auth.register);


export default router;