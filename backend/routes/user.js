const express= require("express");
const jwt = require("jsonwebtoken");
const {JWT_SECRET}= require("../config")
const zod= require('zod');
const {User} = require("../db");
const router= express.Router();


const signUpscheme = zod.object({
    username: zod.string(),
    password:zod.string(),
    fristName:zod.string(),
    lastName:zod.string()
})
router.post("/signup" ,  async function ( req,res){
   const {success} = signUpscheme.safeParse(req.body);
   if(!success){
    return res.json({
        message: "Email already taken / Incorrect inputs"
    })
   }
   const existingUser= await User.findone({
    username:req.body.username
   })

   if(existingUser){
    return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
   }

 const user= await User.create({
    username:req.body.username,
    password:req.body.password,
    fristName:req.body.fristName,
    lastName: req.body.lastName
 })
 const userId= user._id;

 const token= jwt.sign({
    userId
 }, JWT_SECRET)
   res.json({
    message: "User created successfully",
    token: token
   })
})

 const signinBody= zod.object({
    username:zod.string().email(),
    password:zod.string()
 })

 router.post("/sinin" ,  async(req,res)=>{
          const {success} = signinBody.safeParse(req.body);
          if(!success){
           return res.status(411).json({
            message:"incorrect inputs"
            })
          }

          const user= await User.findone({
            username:req.body.username,
            password:req.body.password
          })
          if(user){
            const token= jwt.sign({
                userId:user._id
            },JWT_SECRET);
            res.json({
                token:token
            })
            return
          }

          res.status(411).json({
            message:"error while loging in"
          })
 })
module.exports=router