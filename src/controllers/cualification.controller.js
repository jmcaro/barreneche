import Cualification from "../models/Cualifications.js";
import Consulta from "../models/Consultas.js";
import Usuario from "../models/Usuarios.js";
import Roles from "../models/Roles.js";
import Response from "../models/Response.js";


export const getAll = async (req, res) => {
  try {
    const cualifications = await Cualification.findAll({
        include: [
          {
            model: Consulta,
            attributes: ['ticketNumber', 'createdAt'], // Incluye el campo 'createdAt'
            include: [
              {
                model: Usuario,
                include: [
                  {
                    model: Roles,
                    as: 'roles', // Utiliza el alias 'roles'
                    attributes: ['rol'], // Incluye el campo 'rol'
                  },
                ],
              },
            ],
          },
        ],
      });

    const consultas = await Consulta.findAll();
    

    res.render('cualifications/index', { cualifications, consultas });
    res.json(consultas);
    //res.json(cualifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getCualifications = async (req, res) => {
    try {
      const consultas = await Consulta.findAll({
        //  raw:true,
        include: [
          {
            all: true,
            nested: true,
          },
        ],
        order: [["ticketNumber", "ASC"]], // Ordena por ticketNumber de manera ascendente
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
      const cualifications = await Cualification.findAll({
        include: [
          {
            model: Consulta,
            attributes: ["ticketNumber", "createdAt"],
            include: [
              {
                model: Usuario,
                include: [
                  {
                    model: Roles,
                    as: "roles",
                    attributes: ["rol"],
                  },
                ],
              },
              {
                model: Response,
                attributes: ["id"], // Se eliminó fechaRespuesta
              },
            ],
          },
        ],
      });
      res.render("cualifications/cualifications", { consultas, profesores, estudiantes, cualifications });
      //console.log(consultas);
      //res.status(200).json({ consultas });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

export const createForm = async (req, res) => {
  const consultas = await Consulta.findAll();
  res.render('cualifications/create', { consultas });
};

export const create = async (req, res) => {
  try {
    const { ConsultaId, calificacion, comentario } = req.body;

     // Verifica si ya existe una calificación para esta consulta
     const existingCualification = await Cualification.findOne({ where: { ConsultaId } });

     if (existingCualification) {
       return res.status(400).json({ error: "Esta consulta ya tiene una calificación." });
     }

    await Cualification.create({ ConsultaId, calificacion, comentario });
    res.redirect('/cualifications');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editForm = async (req, res) => {
  const cualification = await Cualification.findByPk(req.params.id);
  const consultas = await Consulta.findAll();
  //res.json(cualification);
  res.render('cualifications/editCualification', { cualification, hiddenNavbar: true });
};

export const update = async (req, res) => {
    try {
      const { calificacion, comentario } = req.body;
      const { id } = req.params;
  
      const cualification = await Cualification.findByPk(id);
      if (!cualification) {
        return res.status(404).json({ error: "Calificación no encontrada." });
      }
  
      await Cualification.update({ calificacion, comentario }, { where: { id } });
  
      res.redirect("/cualifications");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteCualification = async (req, res) => {
    try {
      await Cualification.destroy({ where: { id: req.params.id } });
      res.redirect("/cualifications");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };