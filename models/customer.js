"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  const Sequelize=require('sequelize');
const sequelize_1 = require("sequelize");
const sequelize = require('../util/database');
const Customer = sequelize.define('customer', {
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    customername: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    website: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.STRING,
        allowNull: false,
    }
});
module.exports = Customer;
