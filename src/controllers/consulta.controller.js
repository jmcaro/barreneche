import { fakerES_MX as faker } from "@faker-js/faker";
import Consulta from "../models/Consultas.js";
import Categoria from "../models/Categorias.js";
import Usuario from "../models/Usuarios.js";
import UserConsultation from "../models/UserConsultation.js";

export const getConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll({
      //  raw:true,
      include: [
        {
          all: true,
          nested: true,
        },
      ],
    });
    const profesores = await Usuario.findAll({
      include: {
        association: "roles",
        where: { rol: "Profesor" },
      },
    });

    // Obtener usuarios con rol de Estudiante
    const estudiantes = await Usuario.findAll({
      include: {
        association: "roles",
        where: { rol: "Estudiante" },
      },
    });
    res.render("consultas/consultas", { consultas, profesores, estudiantes });
    //console.log(consultas);
    //res.status(200).json({ consultas });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getAssignConsultation = async (req, res) => {
  try {
    const consultas = await Consulta.findAll({
      //  raw:true,
      include: [
        {
          all: true,
          nested: true,
        },
      ],
    });
    const profesores = await Usuario.findAll({
      include: {
        association: "roles",
        where: { rol: "Profesor" },
      },
    });

    // Obtener usuarios con rol de Estudiante
    const estudiantes = await Usuario.findAll({
      include: {
        association: "roles",
        where: { rol: "Estudiante" },
      },
    });

    const assignUser = await UserConsultation.findAll({});
    res.render("consultas/assignconsultation", {
      consultas,
      profesores,
      estudiantes,
    });
    //console.log(consultas);
    //res.status(200).json({ assignUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createFormConsulta = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.render("consultas/createInquiry", { categorias });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createConsulta = async (req, res) => {
  try {
    const {
      correo,
      telefono,
      consulta,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      razonSocial,
      tipoIdentificacion,
      numeroIdentificacion,
      sexo,
      categoriaId,
    } = req.body;
    //const cat = "16a4f6a4-d9f7-4d2a-8e0a-70d9bbf3f6e2";
    await Consulta.sync();
    const createConsulta = await Consulta.create({
      correo,
      telefono,
      consulta,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      razonSocial,
      tipoIdentificacion,
      numeroIdentificacion,
      sexo,
      categoriaId,
    });
    res.status(200).json({
      message: createConsulta.consulta + " fue creado con éxito",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const consulta = await Consulta.findByPk(id, {
      include: {
        all: true,
        nested: true,
      },
    });
    //res.status(302).json({ consulta });
    // Renderizar la vista y pasar los datos de la consulta
    res.render("consultas/consultaDetalles", { consulta });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readFormConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const consulta = await Consulta.findByPk(id, {
      include: {
        all: true,
        nested: true,
      },
    });
    // Obtener los valores del ENUM de `estado`
    const estados = Consulta.rawAttributes.estado.values;
    const categorias = await Categoria.findAll(); // Para seleccionar categorías en el formulario

    //res.status(302).json({ consulta });
    res.render("consultas/createInquiry", { consulta, categorias, estados });
  } catch (error) {
    console.error("Error al obtener la consulta:", error);
    res.status(500).json({ error });
  }
};

export const updateConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      correo,
      telefono,
      consulta,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      razonSocial,
      tipoIdentificacion,
      numeroIdentificacion,
      sexo,
      estado,
      categoriaId,
    } = req.body;
    const updateConsulta = await Consulta.update(
      {
        correo,
        telefono,
        consulta,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        razonSocial,
        tipoIdentificacion,
        numeroIdentificacion,
        sexo,
        estado,
        categoriaId,
      },
      {
        where: { id },
      }
    );
    /* res.status(200).json({
      message: updateConsulta + " fue actualizado con éxito",
    }); */
    res.redirect(`/consultas/${id}`); // Redirige a la vista de detalles de la consulta actualizada
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const assignUserConsultation = async (req, res) => {
  try {
    const { profesorId, estudianteId, ConsultaId } = req.body;
    const assignProfesor = await UserConsultation.create({
      UsuarioId: profesorId,
      ConsultaId,
    });

    // Crear la asignación para el estudiante
    const assignEstudiante = await UserConsultation.create({
      UsuarioId: estudianteId,
      ConsultaId,
    });
    //res.redirect("/consultas");
    /* res.status(200).json({
      message:
        "La asignación de profesor y estudiante fue actualizada con éxito",
      data: {
        profesor: assignProfesor,
        estudiante: assignEstudiante,
      },
    }); */
    res.redirect("/consultas");
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send("Error inesperado");
  }
};

export const deleteConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    await Consulta.destroy({
      where: {
        id: id,
      },
    });
    res.status(204).json({
      message: "Consulta eliminado con éxito",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
