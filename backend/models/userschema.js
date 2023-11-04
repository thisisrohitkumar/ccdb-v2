// Import necessary modules
const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });

// Create a user model based on the schema
const user=mongoose.model("user",userSchema)
module.exports=user

