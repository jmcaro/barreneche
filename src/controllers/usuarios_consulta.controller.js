import UsuariosConsulta from "../models/UsuariosConsulta.js";

export const getUsuariosConsultas = async (req, res) => {
  try {
    const usuarios_consultas = await UsuariosConsulta.findAll();
    res.status(200).json({ usuarios_consultas });
    //res.render("consultas/consultas_usuarios", { usuarios_consultas });
    //console.log(roles);
  } catch (error) {
    res.status(500).json({ error });
  }
};
