/* const { Sequelize } = require('sequelize'); */
import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('consultorio', 'root', '#Boyer88', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
  });

export const test = async function(){
    try{
      await sequelize.authenticate();
      console.log("Conexion a mysql exitosa");
    } catch (error){
       console.error("Ocurrio un error", error);
    }
};

