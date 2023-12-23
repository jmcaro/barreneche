import express from "express";
import * as home from '../controllers/home.controller.js';

const router = express.Router();
router.route("/home")
.get(home.getHome)


export default router;