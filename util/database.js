"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("assignment1", "root", "insert_password", {
    dialect: "mysql",
    host: "localhost",
});
module.exports = sequelize;
