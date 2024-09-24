import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Usuario from "./Usuarios.js";
import Consulta from "./Consultas.js";

class UsuariosConsulta extends Model {}
UsuariosConsulta.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize, modelName: "UsuariosConsulta", tableName: "usuario_consulta" }
);
Usuario.belongsToMany(Consulta, { through: UsuariosConsulta });
Consulta.belongsToMany(Usuario, { through: UsuariosConsulta });

/* await Usuario.sync();
await Consulta.sync();
await UsuariosConsulta.sync();
 */
export default UsuariosConsulta;
