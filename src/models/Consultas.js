import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Usuario from "../models/Usuarios.js";
import Response from "../models/Response.js";

class Consulta extends Model {}

Consulta.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Campo ticketNumber autoincremental
    ticketNumber: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Esto hace que sea autoincremental
      allowNull: false,
      unique: true,
    },
    consulta: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipoPersona: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL",
    },
    primerNombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    segundoNombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primerApellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    segundoApellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipoIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM(
        "Pendiente de revisión",
        "En proceso",
        "Esperando información adicional",
        "En revisión",
        "Resuelta",
        "Cerrada",
        "Rechazada",
        "Derivada"
      ),
      defaultValue: "Pendiente de revisión",
    },
  },
  { sequelize, modelName: "Consulta", tableName: "consultas" }
);

export default Consulta;
