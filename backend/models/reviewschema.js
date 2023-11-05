

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
    required: false,
  },
  course_id: {
    type: String, // Change the data type as needed (e.g., String or ObjectId)
    required: false,
  },
  review_text: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Review', reviewSchema);


