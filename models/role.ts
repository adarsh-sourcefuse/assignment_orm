import { Sequelize ,INTEGER,STRING,ENUM} from "sequelize";
const sequelize=require('../util/database');
const Role=sequelize.define('role',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    rolename:
    {
       type:STRING,
       allowNull:false,
    },
    rolekey:
    {
       type:ENUM,
       values:['admin','super_admin','subscriber'],
       allowNull:false,
    },
    description:
    {
       type:STRING,
       allowNull:false,
    }
   
})

module.exports=Role;