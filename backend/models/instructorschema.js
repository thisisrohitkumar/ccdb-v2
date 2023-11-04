// instructorModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
 
  name: String,
  hearts: Number,
  image: String
});
const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;
