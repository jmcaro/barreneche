import Response from "../models/Response.js";
import Consulta from "../models/Consultas.js";
import Usuario from "../models/Usuarios.js";
import UserConsultation from "../models/UserConsultation.js";

export const getAllResponses = async (req, res) => {
  try {
    const responses = await Response.findAll({
      include: [
        {
          model: Consulta,
          include: [
            {
              model: Usuario,
              /* through: { model: UserConsultation, attributes: [] },
              attributes: ["id", "nombre", "email"], // Atributos del usuario */
            },
          ],
          attributes: ["ticketNumber"], // Solo incluye el número de ticket de la consulta
        },
      ],
    });
    res.render("response/responses", { responses });
    //res.status(200).json(responses);
  } catch (error) {
    console.error("Error al obtener todas las respuestas:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Ver respuesta por ID, incluyendo usuarios asignados y número de ticket
export const viewResponse = async (req, res) => {
  try {
    const responseId = req.params.id;
    const respuesta = await Response.findByPk(responseId, {
      include: [
        {
          model: Consulta,
          include: [
            {
              model: Usuario,
              /* through: { model: UserConsultation, attributes: [] },
              attributes: ["id", "nombre", "email"], // Atributos del usuario */
            },
          ],
          attributes: ["ticketNumber"], // Solo incluye el número de ticket de la consulta
        },
      ],
    });
   // res.json(respuesta);
    console.log(respuesta);
    //res.render("response/viewResponse", { respuesta });
    res.render("response/viewResponse", { respuesta, hiddenNavbar: true }); 
    if (!respuesta) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener la respuesta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear una nueva respuesta
export const createResponse = async (req, res) => {
  try {
    const respuesta = req.body;
    const newResponse = await Response.create({ ...respuesta });
    const consulta = await Consulta.findByPk(newResponse.ConsultaId);
    if (!consulta) {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }
    res.redirect(`/user_consultation/${consulta.ticketNumber}`);
  } catch (error) {
    console.error("Error al crear la respuesta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// formulario para respuestas
export const createFormResponse = async () => {
  try {
  } catch (error) {}
};

// Asignar una respuesta a una consulta existente
export const assignResponse = async (req, res) => {
  try {
    const { responseId, consultaId } = req.body;
    const response = await Response.findByPk(responseId);
    if (!response) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }

    response.consultaId = consultaId;
    await response.save();

    res
      .status(200)
      .json({ message: "Respuesta asignada a la consulta con éxito" });
  } catch (error) {
    console.error("Error al asignar la respuesta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Editar una respuesta existente
export const editResponse = async (req, res) => {
  try {
    const responseId = req.params.id;
    const contenido = req.body;

    const response = await Response.findByPk(responseId);
    if (!response) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    response.contenido = contenido;
    await response.save();

    res
      .status(200)
      .json({ message: "Respuesta actualizada con éxito", response });
  } catch (error) {
    console.error("Error al editar la respuesta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Borrar una respuesta por ID
export const deleteResponse = async (req, res) => {
  try {
    const responseId = req.params.id;

    const response = await Response.findByPk(responseId);
    if (!response) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }

    await response.destroy();
    res.status(200).json({ message: "Respuesta eliminada con éxito" });
  } catch (error) {
    console.error("Error al borrar la respuesta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
