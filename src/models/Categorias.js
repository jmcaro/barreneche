import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";

class Categoria extends Model {}

Categoria.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Categoria", tableName: "categorias" }
);

export default Categoria;
