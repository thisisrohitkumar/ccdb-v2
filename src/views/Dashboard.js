import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewDash from "../components/ReviewDash";

const Dashboard = () => {
  const [reviewData, setReviewData] = useState([]);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Retrieve user data from session storage
    const userDataJSON = sessionStorage.getItem("userData");
    if (userDataJSON) {
      // Parse the JSON data to get the user object
      const userData = JSON.parse(userDataJSON);
      setUserData(userData);
    }

    if(userData){
        fetch(`https://ccdbapi.onrender.com/api/review?user_id=${userData.email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setReviewData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
    
  }, [userData]);
  return (
    <>
      <div className="container">
        <Header />
        <div className="dashboardContainer">
          <div className="allReviewContainer">
            <h2>Your Reviews</h2>
            <br />
            {reviewData &&
              reviewData?.reviews &&
              reviewData?.reviews?.map((item) => (
                <ReviewDash
                  rating={item.rating}
                  reviewText={item.review_text}
                  courseId={item.course_id}
                />
              ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
