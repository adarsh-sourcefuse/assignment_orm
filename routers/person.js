"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const Person = require('../models/person');
router.post('/user', (req, res, next) => {
    const data = {
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        customerId: req.body.customerId,
        roleId: req.body.roleId,
    };
    Person.create({
        firstname: data.firstname,
        middlename: data.middlename,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        customerId: data.customerId,
        roleId: data.roleId,
    }).then(() => {
        res.status(200).json({ message: "added user" });
    }).catch(() => {
        res.status(200).json({ message: "not valid" });
    });
});
router.get('/user', (req, res, next) => {
    Person.findAll().then((users) => {
        res.status(200).json({ users: users });
    }).catch(() => {
        console.log("error");
    });
});
router.get('/user/:uId', (req, res, next) => {
    const uid = req.params.uId;
    Person.findByPk(uid).then((user) => {
        res.status(200).json({ user: user });
    }).catch(() => {
        console.log("error");
    });
});
router.put('/user/:uId', (req, res, next) => {
    const uid = req.params.uId;
    const data = {
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        customerId: req.body.customerId,
        roleId: req.body.roleId,
    };
    Person.findByPk(uid).then((user) => {
        user.firstname = data.firstname,
            user.middlename = data.middlename,
            user.lastname = data.lastname,
            user.email = data.email,
            user.phone = data.phone,
            user.address = data.address,
            user.customerId = data.customerId,
            user.roleId = data.roleId,
            user.save();
        console.log("*************", user);
        res.status(200).json({ user: user });
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log("error");
    });
});
router.delete('/user/:uId', (req, res, next) => {
    const uid = req.params.uId;
    Person.findByPk(uid).then((user) => {
        user.destroy();
        res.status(200).json({ message: "deleted user" });
    }).catch((err) => {
        console.log("error");
    });
});
module.exports = router;
