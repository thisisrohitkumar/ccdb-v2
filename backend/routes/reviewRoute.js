const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Define routes for reviews
router.get('/', reviewController.getAllReviews);
router.post('/', reviewController.createReview);
router.put('/:reviewId', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;