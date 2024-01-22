import { faker } from "@faker-js/faker";
import Usuario from "../models/Usuarios.js";
import Rol from "../models/Roles.js";
import bcrypt from "bcryptjs";

const encriptar = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      //  raw:true,
      include: {
        all: true,
        nested: true,
      },
    });
    //console.log(usuarios);
    return res.render("user/usuarios", { usuarios });
    //res.status(200).json({usuarios});
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createUsuario = async (req, res) => {};

export const readUsuarios = async (req, res) => {};

export const formUpdateUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(req.body);
    const user = await Usuario.findByPk(id);
    const roles = await Rol.findAll();
    console.log(user);
    return res.render("user/register", { user, roles });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateUsuario = async (req, res) => {
  try {
    const user = req.body;
    const id = req.params.id;
    const updateUsuario = await Usuario.update(
      {
        tipoDocumento: user.tipoDocumento,
        numeroDocumento: user.numeroDocumento,
        correo: user.correo,
        //password: await encriptar(user.password),
        telefono: user.telefono,
        primerNombre: user.primerNombre,
        segundoNombre: user.segundoNombre,
        primerApellido: user.primerApellido,
        segunApellido: user.segundoApellido,
        nacimento: user.nacimiento,
        rolesId: user.rolesId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.redirect("/usuarios");
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    await Usuario.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/usuarios");
  } catch (error) {
    res.status(500).json({ error });
  }
};
