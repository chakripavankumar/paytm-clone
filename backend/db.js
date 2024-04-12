 const mongoose= require('mongoose');

 mongoose.connect("")

 const userScheme= new mongoose.Schema({
         username:String,
         password:String,
         fristName:String,
         lastName:String,
 })

 const userModel = mongoose.model( "User" , userScheme);

 module.exports={
      User
 }