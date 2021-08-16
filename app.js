"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const Person = require('./models/person');
const Customer = require('./models/customer');
const Role = require('./models/role');
const sequelize = require('./util/database');
const customerRoutes = require('./routers/customer');
const personRoutes = require('./routers/person');
const roleRoutes = require('./routers/role');
const app = express();
app.use(bodyParser.json());
app.use(customerRoutes);
app.use(personRoutes);
app.use(roleRoutes);
Person.belongsTo(Customer);
Person.belongsTo(Role, {
    constraints: true,
    onDelete: 'CASCADE'
});
sequelize.sync().then(() => {
    app.listen(3000);
}).catch((err) => {
    console.log("gh");
    console.log(err);
});
