import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, useParams } from "react-router-dom";

const PostReview = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <Header />
        <div className="postReviewFormContainer">
          <form>
            <h2>Rate Your Favourite Course</h2>
            <p>Ratings</p>
            <div class="rating-label">
              <input
                type="radio"
                name="rating"
                value="1"
                class="rating-input"
                required
              />
              1
              <input
                type="radio"
                name="rating"
                value="2"
                class="rating-input"
              />
              2
              <input
                type="radio"
                name="rating"
                value="3"
                class="rating-input"
              />
              3
              <input
                type="radio"
                name="rating"
                value="4"
                class="rating-input"
              />
              4
              <input
                type="radio"
                name="rating"
                value="5"
                class="rating-input"
              />
              5
              <input
                type="radio"
                name="rating"
                value="6"
                class="rating-input"
              />
              6
              <input
                type="radio"
                name="rating"
                value="7"
                class="rating-input"
              />
              7
              <input
                type="radio"
                name="rating"
                value="8"
                class="rating-input"
              />
              8
              <input
                type="radio"
                name="rating"
                value="9"
                class="rating-input"
              />
              9
              <input
                type="radio"
                name="rating"
                value="10"
                class="rating-input"
              />
              10
            </div>
            <textarea name="reviewText" id="" cols="30" rows="5" placeholder="Enter your review here (optional)"></textarea>
            <button type="submit">Post Review</button>
          </form>
          <NavLink to={`/courses-details/${id}`} className="reset-a">
            <i class="fa-solid fa-circle-arrow-left"></i> Back To Course
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostReview;
