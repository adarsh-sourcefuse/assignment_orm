import { Sequelize,INTEGER,STRING} from "sequelize";
const sequelize=require('../util/database');
const Person=sequelize.define('user',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    firstname:
    {
       type:STRING,
       allowNull:false,
    },
    middlename:
    {
       type:STRING,
       allowNull:false,
    },
    lastname:
    {
       type:STRING,
       allowNull:false,
    },
    email:
    {
       type:STRING,
       allowNull:false,
    },
   phone:
    {
       type:STRING,
       allowNull:false,
    },
    address:
    {
       type:STRING,
       allowNull:false,
    },
  
})

module.exports=Person;