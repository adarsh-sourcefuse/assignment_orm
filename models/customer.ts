//  const Sequelize=require('sequelize');
import { Sequelize,INTEGER,STRING} from "sequelize";
const sequelize=require('../util/database');
const Customer=sequelize.define('customer',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    customername:
    {
       type:STRING,
       allowNull:false,
    },
    website:
    {
       type:STRING,
       allowNull:false,
    },
    address:
    {
       type:STRING,
       allowNull:false,
    }
  
})

module.exports=Customer;