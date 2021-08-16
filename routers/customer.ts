import {Router} from 'express'
const router=Router()
const Customer1=require('../models/customer')
router.post('/customer',(req:any,res:any)=>
{
    const data={
        customername:req.body.customername,
        website:req.body.website,
        address:req.body.address,
    }
    Customer1.create({
        customername:data.customername,
        website:data.website,
        address:data.address
    }).then((result:any)=>
        {
            res.status(200).json({message:"added user"}) 
        }).catch((err:any)=>
            {
                console.log("chdhc")
                console.log("error")
            })
})
router.get('/customer',(req,res)=>
{
    Customer1.findAll().then((customers:any)=>{

        res.status(200).json({customers:customers}) 

    }).catch((err:any)=>
        {
            console.log("error")
        })
})
router.get('/customer/:cId',(req,res,next)=>
{
     const cid=req.params.cId;
    Customer1.findByPk(cid).then((customer:any)=>{

        res.status(200).json({customer:customer}) 

    }).catch((err:any)=>
        {
            console.log("error")
        })
})
module.exports=router;