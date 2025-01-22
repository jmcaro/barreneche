import express from "express";

import morgan from "morgan";
import cors from "cors";
import exphbs from "express-handlebars";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import * as helpers from "./assets/js/utilsHBS.js";
import cookieParser from "cookie-parser";
import "../src/models/associations.js";
import errorHandler from './middlewares/errorHandler.js';
import './helpers/hbsHelpers.js'
const app = express();
app.use(cookieParser());
const __dirname = dirname(fileURLToPath(import.meta.url));
import moment from "moment";

//public files
const assets = resolve(__dirname + "/assets");
app.use(express.static(assets));
//console.log(assets);

// template engine
// config view engine
const hbs = exphbs.create({
  extname: ".hbs",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowedProtoMethodsByDefault: true,
  },
  helpers: {
    formatDate: (date, format) => {
      return moment(date).format(format);
    },
    eq: (a, b) => a === b,
    or: (a, b) => a || b,
    // Helper para verificar si un usuario tiene un rol específico
    hasRole: (usuarios, rol) => {
      return usuarios.some((usuario) => usuario.roles.rol === rol);
    },
    // Helper para verificar si hay un usuario con cualquiera de los roles especificados
    hasAnyRole: (usuarios, ...roles) => {
      roles.pop(); // Elimina el último argumento adicional que Handlebars agrega
      return usuarios.some((usuario) => roles.includes(usuario.roles.rol));
    },
  },
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", resolve(__dirname + "/views"));

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//Routes

import roles from "./routes/roles.routes.js";
app.use(roles);

import categorias from "./routes/categorias.routes.js";
app.use(categorias);

import consulta from "./routes/consultas.routes.js";
app.use(consulta);

import auth from "./routes/auth.routes.js";
app.use(auth);

import usuarios from "./routes/usuarios.routes.js";
app.use(usuarios);

import home from "./routes/home.routes.js";
app.use(home);

import responses from "./routes/responses.routes.js";
app.use(responses);

//Error routes
import errorRoutes from './routes/error.routes.js';
app.use('/', errorRoutes);
errorHandler(app);

export default app;
