import express from "express";
import morgan from "morgan";
import cors from "cors";
import exphbs from "express-handlebars";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//public files
const assets = resolve(__dirname + "/assets");
app.use(express.static(assets));
//console.log(assets);

// template engine
// config view engine
const hbs = exphbs.create({
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", resolve(__dirname + "/views"));

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

export default app;
