"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require('../util/database');
const Person = sequelize.define('user', {
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstname: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    middlename: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
});
module.exports = Person;
