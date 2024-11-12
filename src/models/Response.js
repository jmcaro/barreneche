import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql.js";

const Response = sequelize.define(
  "Response",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fechaRespuesta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ConsultaId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "responses", // Nombre de la tabla en la base de datos
    timestamps: false,
  }
);

export default Response;
