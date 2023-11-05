import { React, useState, useEffect } from "react";
import Header from '../components/Header'
import CourseHero from '../components/CourseHero'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";

const CourseDetails = () =>{
    const { id } = useParams();
  
  const [data, setData] = useState([])
    useEffect(() => {
      window.scrollTo(0, 0);

      fetch(`http://localhost:5000/api/courses?_id=${id}`)
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

    }, [id]);
    return(
        <>
            <div className="container">
                <Header />
                <div>
                {data &&
              data?.courses &&
              data?.courses?.map((item) => (

                <CourseHero
                    courseId = {item._id}
                    courseName = {item.course_title}
                    courseDesc = {item.description}
                    courseImg = {item.image}
                    courseInstructor = {item.instructor_name}
                />
              ))}
                </div>
                
                <Footer />
            </div>
        </>
    )
}

export default CourseDetails;