 const mongoose= require('mongoose');

 mongoose.connect("")

 const userScheme= new mongoose.Schema({
          username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            minLength:3,
            maxLenght:30
          },
          password:{
            type:String,
            required:true,
            minLength:6
          },
          fristName:{
           type:String,
           required:true,
           trim:true,
           maxLength:50,
          },
          lastName:{
            type:String,
            required:true,
            trim:true,
            maxLength:50,
          }
 })

 const userModel = mongoose.model( "User" , userScheme);

 module.exports={
      User
 }