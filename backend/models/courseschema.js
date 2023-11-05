const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the course schema
const courseSchema = new Schema({
  course_title:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  instructor_name:{
    type: String,
    required: true
  },
  description: String,
  duration_inMonths: Number,
  rating: Number,
  image: String
});

// Create a Course model using the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;