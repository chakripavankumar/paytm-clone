const express= require("express");
const jwt = require("jsonwebtoken");
const {JWT_SECRET}= require("../config");
const {authMiddleware}= require("../middleware");
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
 
    const UpdateBody= zod.object({
    password: zod.string().optional(),
	firstName: zod.string().optional(),
	lastName: zod.string().optional()
    })
    router.put("/user" ,  async(req,res)=>{
        const {success}= UpdateBody.safeParse(req.body);
        if(!success){
            res.status(411).json({
                message: "Error while updating information"
            })
        }
      await User.updateOne({_id:req.userId}, req.body);
      res.json({
        message: "Updated successfully"
      })
 })

 router.get("/bulk" , async  (req,res)=>{
   const filter = req.query.filter || "" ;

   const users= await  User.find({
    $or:[{
        firstName: {
            "$regex": filter
        }
    }, {
        lastName: {
            "$regex": filter
        }
    }]
   })
   res.json({
    user:users.map(user =>({
         username:user.username,
         fristName:user.firstName,
         lastName:user.lastName,
         _id:user._id
    }))
   })
  })
module.exports=router