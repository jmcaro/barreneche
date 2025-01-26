import UserConsultation from "../models/UserConsultation.js";
import Usuario from "../models/Usuarios.js";
import Consulta from "../models/Consultas.js";

export const getUserConsultation = async (req, res) => {
  try {
    const consultation = await Consulta.findAll({
      attributes: ["id", "ticketNumber", "estado"]
    });
    //res.status(200).json({ user_consultation });
    // Pasar datos a la vista
    res.render("consultas/user_consultation", { consultation });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).send("Error al obtener los datos");
  }
};

export const reviewConsultation = async (req, res) => {
  try {
    const ticketNumber = req.params.id;
    const consulta = await Consulta.findOne({
      where: { ticketNumber },
      include: {
        all: true,
        nested: true,
      },
    });
    //res.status(302).json({ consulta });
    res.render("consultas/consultation_review", { consulta });
  } catch (error) {
    res.status(500).json({ error });
  }
}
