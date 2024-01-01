/* const dot = require('dotenv');
const {sequelize,test} = require("./database/mysql");
const app = require('./app/app'); */

import dot from "dotenv";
import { sequelize, test } from "./database/mysql.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    dot.config();
    await test();
    app.listen(PORT, () => {
      console.log(`Conectado  http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
