import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
class Rol extends Model {};

Rol.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    rol:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{ sequelize,
    modelName:"Rol",
    tableName: 'roles'
});

export default Rol;