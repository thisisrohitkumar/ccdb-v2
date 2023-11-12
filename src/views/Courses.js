import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useParams } from "react-router-dom";

const Courses = () => {

  const { category } = useParams();
  
  const [data, setData] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    
    
      if(category){
        fetch(`https://ccdbapi.onrender.com/api/courses?sort=-rating&category=${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      }
      else{
        fetch(`https://ccdbapi.onrender.com/api/courses?sort=-rating`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      }

  }, [category]);

  let courseCat = ""

  const checkCategory = () => {
    if(category === "web")
      courseCat = "Web Development"
    else if(category === "operating")
      courseCat = "Operating System"
    else if(category === "java")
      courseCat = "Java"
    else if(category === "linux")
      courseCat = "Linux"
    else if(category === "ai")
      courseCat = "AI / ML"
    else if(category === "dsa")
      courseCat = "Data Structures"
    else if(category === "ui")
      courseCat = "UI / UX"
    else
      courseCat = "All"
  }

  checkCategory()

  return (
    <>
      <div className="container">
        <Header />
        <div className="courseContainer">
          <div className="coursePageHeading">
            <h1>{`${courseCat} Courses`}</h1>
            
          </div>
          <div className="courseCardContainer">
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
                  courseInstructor={item.instructor_name}
                />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Courses;
