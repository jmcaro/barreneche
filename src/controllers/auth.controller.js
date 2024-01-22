import { faker } from "@faker-js/faker";
import Usuario from "../models/Usuarios.js";
import Rol from "../models/Roles.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Encriptacion password con bycrypt/////////////////////////
const encriptar = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const desencriptar = async (password, reqPassword) => {
  return await bcrypt.compare(password, reqPassword);
};
///////////////////////////////////////////////////////////

//creacion de tokens
const tokenizador = (payload) => {
  return jwt.sign({ id: payload }, process.env.JWTOKEN, { expiresIn: 86400 });
};

export const signUp = async (req, res) => {
  try {
    const user = req.body;
    //console.log(user);
    await Usuario.sync();
    const createUsuario = await Usuario.create({
      tipoDocumento: user.tipoDocumento,
      numeroDocumento: user.numeroDocumento,
      correo: user.correo,
      password: await encriptar(user.password),
      telefono: user.telefono,
      primerNombre: user.primerNombre,
      segundoNombre: user.segundoNombre,
      primerApellido: user.primerApellido,
      segunApellido: user.segundoApellido,
      nacimento: user.nacimiento,
      isActive: true,
      rolesId: user.rolesId,
    });
    const token = tokenizador(createUsuario.id);
    res.cookie("token", token), res.redirect("/usuarios");
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};

export const signIn = async (req, res) => {
  const { user, password } = req.body;
  const userCheck = await Usuario.findOne({
    include: {
      all: true,
      nested: true,
    },
    where: { numeroDocumento: user },
  });
  if (!userCheck) {
    res.status(400).json({ message: "Datos incorrectos 1" });
  } else {
    //res.status(200).json(userCheck);
    const passwordCheck = await desencriptar(password, userCheck.password);
    console.log(passwordCheck);
    if (!passwordCheck) {
      res.status(400).json({ message: "Datos incorrectos 2" });
    } else {
      const token = tokenizador(userCheck.id);
      res.cookie("token", token);
      res.redirect("/usuarios");
    }
  }
};
export const login = (req, res) => {
  return res.render("user/login", {});
};
export const register = async (req, res) => {
  const roles = await Rol.findAll();
  return res.render("user/register", { roles });
};
export const dashboard = (req, res) => {
  return res.render("user/dashboard", {});
};
