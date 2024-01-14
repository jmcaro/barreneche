import Rol from "../models/Roles.js";
import { faker } from "@faker-js/faker";

export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    //res.status(200).json({ roles });
    res.render("roles/roles", { roles });
    //console.log(roles);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const formCreateRol = (req, res) => {
  //res.render("roles/create", {});
  res.render("roles/create");
};

export const createRol = async (req, res) => {
  //console.log(req.body);
  try {
    const { rol } = req.body;
    await Rol.sync();
    const createRol = await Rol.create({
      rol: rol,
    });
    /* res.status(200).json({
      message: createRol.rol + " fue creado con éxito",
    }); */
    res.redirect("/roles");
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readRol = async (req, res) => {
  try {
    const id = req.params.id;
    const rol = await Rol.findByPk(id);
    res.status(302).json({ rol });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateRol = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(id);
    //const roles = await Rol.findByPk(id);
    const { rol } = req.body;
    console.log(rol);
    const updateRol = await Rol.update(
      {
        rol: rol,
      },
      {
        where: {
          id: id,
        },
      }
    );
    //console.log(updateRol);
    res.redirect("/roles");
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteRol = async (req, res) => {
  //console.log(req.params.id);
  try {
    const id = req.params.id;
    await Rol.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/roles");
  } catch (error) {
    res.status(500).json({ error });
  }
};
