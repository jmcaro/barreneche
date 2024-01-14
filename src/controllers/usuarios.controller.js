import { faker } from "@faker-js/faker";
import Usuario from "../models/Usuarios.js";
import bcrypt from "bcryptjs";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      //  raw:true,
      include: {
        all: true,
        nested: true,
      },
    });
    console.log(usuarios);
    res.render("user/usuarios", { usuarios });
    //res.status(200).json({usuarios});
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createUsuario = async (req, res) => {};

export const readUsuarios = async (req, res) => {};

export const updateUsuario = async (req, res) => {};

export const deleteUsuario = async (req, res) => {};
