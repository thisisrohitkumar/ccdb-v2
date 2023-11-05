// const Review = require('../models/review');
// const { getAllUsers } = require('./userController');
const {query}=require('express')
const review = require('../models/reviewschema');

exports.getAllReviews=async(req,res)=>{
   
    const {rating,user_id,review_text,course_id}=req.query;
    const queryobject={};
  
    if(review_text){
        queryobject.name={$regex:review_text,$options:"i"};
        console.log(queryobject);
    }
    if(rating){
        queryobject.name={$regex:rating,$options:"i"};
        console.log(queryobject);
    }
    if(user_id){
        queryobject.name={$regex:user_id,$options:"i"};
        console.log(queryobject);
    }
    if(course_id){
        queryobject.name={$regex:course_id,$options:"i"};
        console.log(queryobject);
    }
    
     let apiData=review.find(queryobject);
     
     if(sort){
        //let sortfix=sort.replace(","," ");
        let sortfix=sort.split(",").join(" ");
        apiData=apiData.sort(sortfix);
     }
     
     if(select){
        let selectfix=select.split(",").join(" ");
        apiData=apiData.select(selectfix);
     }
  
    //  let page=Number(req.query.page) || 1;
    //  let limit =Number(req.query.limit) || 6;
    //  let skip=(page-1)*limit;
    //  apiData=apiData.skip(skip).limit(limit);
  
  
    const reviews=await apiData;
    //await Product.deleteMany({});
    res.status(200).json({ reviews });
  };

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const reviews = new review(req.body);
    const savedReview = await reviews.save();
    res.json(savedReview);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a review' });
  }
};

// Update an existing review
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await review.findByIdAndUpdate(req.params.reviewId, req.body, { new: true });
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Error updating a review' });
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    await review.findByIdAndRemove(req.params.reviewId);
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting a review' });
  }
};

