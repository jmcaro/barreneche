import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Usuario from "../models/Usuarios.js";
import Consulta from "../models/Consultas.js";

class UserConsultation extends Model {}

UserConsultation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    // Claves foráneas opcionales si quieres campos adicionales para los IDs
    UsuarioId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: Usuario },
    },
    ConsultaId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: Consulta },
    },
  },
  {
    sequelize,
    modelName: "UserConsultation",
    tableName: "user_consultation",
    timestamps: true,
  }
);

/* await Usuario.sync();
await Consulta.sync();
await UsuariosConsulta.sync();
 */
//await UserConsultation.sync();
export default UserConsultation;
