import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import CourseHero from "../components/CourseHero";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`https://ccdbapi.onrender.com/api/courses?_id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(`https://ccdbapi.onrender.com/api/review?course_id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setReviewData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  return (
    <>
      <div className="container">
        <Header />
        <div>
          {courseData &&
            courseData?.courses &&
            courseData?.courses?.map((item) => (
              <CourseHero
                courseId={item._id}
                courseName={item.course_title}
                courseDesc={item.description}
                courseImg={item.image}
                courseInstructor={item.instructor_name}
                courseRating={item.rating}
              />
            ))}
        </div>

        <div className="allReviewContainer">
          <h2>All Reviews</h2>
          <br />
          {reviewData &&
            reviewData?.reviews &&
            reviewData?.reviews?.map((item) => (
              <Review
                rating={item.rating}
                reviewText={item.review_text}
                userId={item.user_id}
              />
            ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
