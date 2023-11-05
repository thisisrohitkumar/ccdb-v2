// Import necessary modules
const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role:{
      type:String,
      enum:["Admin", "User", "Tutor"],
  }
  });

// Create a user model based on the schema
const user=mongoose.model("user",userSchema)
module.exports=user

