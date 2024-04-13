 const mongoose= require('mongoose');

 mongoose.connect("mongodb+srv://final:Pavan%408096@cluster1.chs19ed.mongodb.net/paytm")

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

 const accountScheme= new mongoose.Schema({
  userId: {
     type:mongoose.Schema.Types.ObjectId,
     ref:'User'
  },
  balance:{
    type:Number,
    required:true
  }
 })

 const User = mongoose.model( "User" , userScheme);
 const Account = mongoose.model("Account" , accountScheme)

 module.exports={
      User,
      Account
 }