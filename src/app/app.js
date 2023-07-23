import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors';

const app = express();




//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//Routes
import roles from "../routes/roles.routes.js";
app.use(roles);

import categorias from '../routes/categorias.routes.js';
app.use(categorias);

import consulta from '../routes/consultas.routes.js';
app.use(consulta);

export default app;


