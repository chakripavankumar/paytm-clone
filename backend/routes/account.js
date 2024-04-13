const express= require("express");
const   authMiddleware= require("../middleware")
const Account= require("../db")

  const router=  express.Router();

  router.get("/balance" , authMiddleware, async(req,res)=>{
    const account = await Account.findone({
      userId:req.userId
    });
    res.json({
      balance:account.balance
    })
  })

  router.post("/transfer" ,  authMiddleware , async (req,res)=>{
    const {amaount,to}=req.body;
    const account = await Account .findone({
      userId:req.userId
    });
    if(account.balance<amaount){
      return res.status(400).json({
        message:"insuficient balance"
      })
    }
    const toAccount= await Account.findone({
      userId:to
    });
    if(!toAccount){
      res.status(400).json({
        message: "Invalid account"
      })
    }
     await Account.updateOne({
      userId:req.userId
     },{
      $inc:{
        balance:-amaount
      }
     })
      await Account.updateOne({
        userId:to
      },{
        $inc:{
          balance:amaount
        }
      })
      res.json({
        message:"transfer successfull"
      })
  })


  module.exports={
    router
  }