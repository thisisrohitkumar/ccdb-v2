// const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // Define the review schema
// const reviewSchema = new Schema({
//   rating: {
//     type: Number,
//     required: true
//   },
//   reviewText: String,
//   courseid:,
//   userid:

// });

// // Create a Review model using the schema
// const Review = mongoose.model('Review', reviewSchema);

// module.exports = Review;


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
  },
});
module.exports = mongoose.model('Review', reviewSchema);





