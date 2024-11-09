// models/StudentCourse.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql.js";

const StudentCourse = sequelize.define("StudentCourse", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});
export default StudentCourse;
