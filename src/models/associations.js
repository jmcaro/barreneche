import Rol from "./Roles.js";
import Categoria from "./Categorias.js";
import Consulta from "./Consultas.js";
import Usuario from "./Usuarios.js";
import UserConsultation from "./UserConsultation.js";
import Response from "./Response.js";
import Cualification from "./Cualifications.js";
// Relación muchos a muchos entre Usuario y Consulta a través de UserConsultation
Usuario.belongsToMany(Consulta, {
  through: UserConsultation,
  foreignKey: "UsuarioId",
});
Consulta.belongsToMany(Usuario, {
  through: UserConsultation,
  foreignKey: "ConsultaId",
});
Usuario.belongsTo(Rol, {
  as: "roles",
});
Consulta.belongsTo(Categoria, {
  as: "categoria",
});
Consulta.hasOne(Cualification, { foreignKey: "ConsultaId" });
Cualification.belongsTo(Consulta, { foreignKey: "ConsultaId" });

Consulta.hasMany(Response, { foreignKey: "ConsultaId" });
Response.belongsTo(Consulta, { foreignKey: "ConsultaId" });

UserConsultation.belongsTo(Usuario, { foreignKey: "UsuarioId" });
UserConsultation.belongsTo(Consulta, { foreignKey: "ConsultaId" });

//await Response.sync();
//await Consulta.sync({ alter: true });
//await Cualification.sync();