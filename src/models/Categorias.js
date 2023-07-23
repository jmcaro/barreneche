import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";

class Categoria extends Model {};

Categoria.init({
    id:{
        type: DataTypes.INTEGER,
        //defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{ sequelize,
    modelName:"Categoria",
    tableName: 'Categorias'
});

export default Categoria;