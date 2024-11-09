import UserConsultation from "../models/UsuariosConsulta.js";
import Usuario from "../models/Usuarios.js";
import Consulta from "../models/Consultas.js";

export const getUserConsultation = async (req, res) => {
  try {
    const user_consultation = await UserConsultation.findAll({
      include: [Usuario, Consulta],
    });
    // Pasar datos a la vista
    res.render("consultas/user_consultation", { user_consultation });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).send("Error al obtener los datos");
  }
};
