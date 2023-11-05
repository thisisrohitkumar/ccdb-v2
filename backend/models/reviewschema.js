

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  user_id: {
    type: String, // Change the data type as needed (e.g., String or ObjectId)
    required: true,
  },
  course_id: {
    type: String, // Change the data type as needed (e.g., String or ObjectId)
    required: true,
  },
  review_text: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Review', reviewSchema);


