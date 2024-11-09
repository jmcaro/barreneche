// models/Student.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql.js";

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Student;
