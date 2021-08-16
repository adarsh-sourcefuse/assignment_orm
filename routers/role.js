"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const Role1 = require('../models/role');
router.post('/role', (req, res, next) => {
    const data = {
        rolename: req.body.rolename,
        rolekey: req.body.rolekey,
        description: req.body.description
    };
    Role1.create({
        rolename: data.rolename,
        rolekey: data.rolekey,
        description: data.description
    }).then((result) => {
        res.status(201).json({ message: "added role" });
    }).catch((err) => {
        res.status(400).json({ message: "not valid" });
    });
});
router.get('/role', (req, res, next) => {
    Role1.findAll().then((roles) => {
        res.status(200).json({ roles: roles });
    }).catch((err) => {
        console.log("error");
    });
});
router.get('/role/:rId', (req, res, next) => {
    const rid = req.params.rId;
    Role1.findByPk(rid).then((role) => {
        res.status(200).json({ role: role });
    }).catch((err) => {
        res.status(400).json({ message: "not valid" });
    });
});
module.exports = router;
