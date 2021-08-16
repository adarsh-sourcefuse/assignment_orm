import { Sequelize } from "sequelize";
const sequelize=new Sequelize("assignment1","root","insert_password",{
    dialect:"mysql",
    host:"localhost",
})
module.exports=sequelize;