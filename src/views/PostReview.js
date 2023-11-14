import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const PostReview = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // "rating": 3.6,
  // "user_id": "65468726f336c9891bb27aa2",
  // "course_id": "65476cfb274256b697b3e0af",
  // "review_text": "Not good "
  // Initialize formData with userId as an empty string
  const [formData, setFormData] = useState({
    rating: 1,
    user_id: "", // Initialize userId as an empty string
    course_id: id,
    review_text: "",
  });

  useEffect(() => {
    // Retrieve user data from session storage
    const userDataJSON = sessionStorage.getItem("userData");
    if (userDataJSON) {
      // Parse the JSON data to get the user object
      const userData = JSON.parse(userDataJSON);
      setUserData(userData);

      // Update formData with user's email
      setFormData({
        ...formData,
        user_id: userData.email,
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        "https://ccdbapi.onrender.com/api/review",
        formData
      );

      if (response.status === 201) {
        // Handle success, e.g., redirect or display a success message
        console.log("Review posted successfully");
        // console.log(response.data);
        navigate(`/courses-details/${id}`);
      } else {
        // Handle other response codes as needed
        console.error("Error:", response.data);
      }
    } catch (error) {
      // Handle network or request error
      console.error("Error:", error);
    }

    setFormData({
      rating: 1,
      user_id: "", // Initialize userId as an empty string
      course_id: id,
      review_text: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rating" ? parseInt(value, 10) : value,
    });
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="postReviewFormContainer">
          <form onSubmit={handleSubmit}>
            <p>Rating</p>
            <div className="rating-label">
              {[...Array(10)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    className="rating-input"
                    id={index + 1}
                    onChange={handleInputChange}
                    checked={formData.rating === index + 1}
                  />
                  {index + 1}
                </label>
              ))}
            </div>
            <textarea
              name="review_text"
              id="reviewText"
              cols="30"
              rows="5"
              placeholder="Enter your review here (optional)"
              value={formData.reviewText}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Post Review</button>
          </form>
          <NavLink to={`/courses-details/${id}`} className="reset-a">
            <i className="fa-solid fa-circle-arrow-left"></i> Back To Course
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostReview;
