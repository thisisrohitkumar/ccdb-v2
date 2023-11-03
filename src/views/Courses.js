import { React, useEffect } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from "../components/CourseCard";
import thumb1 from '../resources/assets/images/thumbnails/love-babbar.jpg'

import CourseData from "../rawData/courseData";

const Courses = () =>{
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return(
        <>
            <div className="container">
                <Header />
                <div className="courseContainer">
                    <div className="coursePageHeading">
                      <h1>All Courses</h1>
                      <em><i class="fa-solid fa-filter"></i>Filter Courses</em>
                    </div>
                    <div className="courseCardContainer">
                        {CourseData.map((val)=>{
                            return(<CourseCard
                                courseImg = {thumb1}
                                courseRating = {val.rating}
                                courseName = {val.name}
                                courseInstructor = {val.instructor}
                                />)
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Courses;