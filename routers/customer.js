"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const Customer1 = require('../models/customer');
router.post('/customer', (req, res) => {
    const data = {
        customername: req.body.customername,
        website: req.body.website,
        address: req.body.address,
    };
    Customer1.create({
        customername: data.customername,
        website: data.website,
        address: data.address
    }).then((result) => {
        res.status(200).json({ message: "added user" });
    }).catch((err) => {
        console.log("chdhc");
        console.log("error");
    });
});
router.get('/customer', (req, res) => {
    Customer1.findAll().then((customers) => {
        res.status(200).json({ customers: customers });
    }).catch((err) => {
        console.log("error");
    });
});
router.get('/customer/:cId', (req, res, next) => {
    const cid = req.params.cId;
    Customer1.findByPk(cid).then((customer) => {
        res.status(200).json({ customer: customer });
    }).catch((err) => {
        console.log("error");
    });
});
module.exports = router;
