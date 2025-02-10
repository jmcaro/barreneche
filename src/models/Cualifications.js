import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Consulta from "../models/Consultas.js";

class Cualification extends Model {}

Cualification.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ConsultaId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: { model: Consulta },
      },
      calificacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 1, max: 5 },
      },
      comentario: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Cualificacion',
      tableName: 'cualifications',
      timestamps: true,
    }
  );
  
  export default Cualification;