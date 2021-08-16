"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require('../util/database');
const Role = sequelize.define('role', {
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    rolename: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    rolekey: {
        type: sequelize_1.ENUM,
        values: ['admin', 'super_admin', 'subscriber'],
        allowNull: false,
    },
    description: {
        type: sequelize_1.STRING,
        allowNull: false,
    }
});
module.exports = Role;
