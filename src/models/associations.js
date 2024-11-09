import UserConsultation from "./UsuariosConsulta.js";
import Rol from "./Roles.js";
import Categoria from "./Categorias.js";
import Consulta from "./Consultas.js";
import Usuario from "./Usuarios.js";

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
