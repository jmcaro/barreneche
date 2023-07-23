import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Categoria from "./Categorias.js";
class Consulta extends Model {};

Consulta.init({
    id:{
        type: DataTypes.INTEGER,
        //defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true,    
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    },
    consulta:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    tipo_persona:{
        type: DataTypes.STRING,
        allowNull: false
    },
    primer_nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    segundo_nombre:{
        type: DataTypes.STRING,
        allowNull: true
    },
    primer_apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    segundo_apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_identificacion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_identificacion:{        
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{ sequelize,
    modelName:"Consulta",
    tableName: 'consultas'
})


Consulta.belongsTo(Categoria, {
    as : 'categoria'
})

export default Consulta;
