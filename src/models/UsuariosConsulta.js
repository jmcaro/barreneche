import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";

class UserConsultation extends Model {}

UserConsultation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
