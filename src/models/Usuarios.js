import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Consulta from "../models/Consultas.js";

class Usuario extends Model {}

Usuario.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tipoDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroDocumento: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
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
    segunApellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Usuario", tableName: "usuarios" }
);

export default Usuario;
