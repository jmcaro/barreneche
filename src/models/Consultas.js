import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql.js";
import Categoria from "./Categorias.js";
class Consulta extends Model {};

Consulta.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
    tipoPersona:{
        type: DataTypes.STRING,
        allowNull: false
    },
    primerNombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoNombre:{
        type: DataTypes.STRING,
        allowNull: true
    },
    primerApellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoApellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoIdentificacion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroIdentificacion:{        
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    estadoConsulta:{
        type: DataTypes.STRING,
        allowNull: true
    },
},{ sequelize,
    modelName:"Consulta",
    tableName: 'consultas'
})


Consulta.belongsTo(Categoria, {
    as : 'categoria'
})

export default Consulta;
