import jwt from "jsonwebtoken";
import Usuario from "../models/Usuarios.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.log(token);
    return res
      .status(403)
      .json({ message: "No te encuentras loggeado correctamente" });
  } else {
    try {
      const verify = jwt.verify(token, process.env.JWTOKEN);
      req.userID = verify.id;
      if (!verify) {
        return res
          .status(403)
          .json({ message: "No te encuentras loggeado correctamente" });
      } else {
        const user = await Usuario.findByPk(verify.id);
        if (!user) {
          return res.status(404).json({ message: "usuario no encontrado" });
        } else {
          next();
        }
      }
    } catch (error) {
      return res.status(404).json({ message: "error de validacion" });
    }
  }
};
export const isAdmin = async (req, res, next) => {
  const user = await Usuario.findByPk(req.userID, {
    include: { all: true, nested: true },
  });
  //console.log(user.roles.rol);
  try {
    if (user.roles.rol === "Administrador") {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Se requieren permisos de Administrador" });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Se requieren permisos de Administrador" });
  }
};
export const isProfe = async (req, res, next) => {
  const user = await Usuario.findByPk(req.userID, {
    include: { all: true, nested: true },
  });
  //console.log(user.roles.rol);
  try {
    if (user.roles.rol === "Profesor") {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Se requieren permisos de Profesor" });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Se requieren permisos de Profesor" });
  }
};
