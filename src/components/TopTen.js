import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CourseCard from "./CourseCard";
const TopTen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://ccdbapi.onrender.com/api/courses?sort=-rating&limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.courses[0]);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section className="topTenContainer">
        <div className="topTenHeading">
          <h2>Top 5 Courses on CCDb</h2>
          <em>
            <NavLink to="/courses" className="reset-a">
              View all
            </NavLink>
          </em>
        </div>
        <div className="topTenCourses">
          {data &&
            data?.courses &&
            data?.courses?.map((item) => (
              // <li key={index}>
              //     {item.rating}
              // </li>

              <CourseCard
                  id={item._id} 
                  courseImg={item.image}
                  courseRating={item.rating}
                  courseName={item.course_title}
                  courseInstructor="Love Babbar"
                />
            ))}
        </div>
      </section>
    </>
  );
};

export default TopTen;
