import { React, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from "../components/CourseCard";
import thumb1 from '../resources/assets/images/thumbnails/love-babbar.jpg'
import thumb2 from '../resources/assets/images/thumbnails/gate-course.jpg'
import thumb3 from '../resources/assets/images/thumbnails/saurabh-course.jpg'
import thumb4 from '../resources/assets/images/thumbnails/shraddha-course.jpg'
import thumb5 from '../resources/assets/images/thumbnails/thapa-course.jpg'


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
                    <CourseCard
                        courseImg = {thumb1}
                        courseRating = '8.5'
                        courseName = 'Dot Batch'
                        courseInstructor = 'Love Babbar'
                    />
                    <CourseCard
                        courseImg = {thumb2}
                        courseRating = '7.0'
                        courseName = 'S/W Engineering'
                        courseInstructor = 'Gate Smashers'
                    />
                    <CourseCard
                        courseImg = {thumb3}
                        courseRating = '7.9'
                        courseName = 'Python'
                        courseInstructor = 'Saurabh Shukla'
                    />
                    <CourseCard
                        courseImg = {thumb4}
                        courseRating = '8.0'
                        courseName = 'Java'
                        courseInstructor = 'Shraddha Khapra'
                    />
                    <CourseCard
                        courseImg = {thumb5}
                        courseRating = '6.2'
                        courseName = 'React JS'
                        courseInstructor = 'Vinod Thapa'
                    />
                    <CourseCard
                        courseImg = {thumb1}
                        courseRating = '8.5'
                        courseName = 'Dot Batch'
                        courseInstructor = 'Love Babbar'
                    />
                    <CourseCard
                        courseImg = {thumb2}
                        courseRating = '7.0'
                        courseName = 'S/W Engineering'
                        courseInstructor = 'Gate Smashers'
                    />
                    <CourseCard
                        courseImg = {thumb3}
                        courseRating = '7.9'
                        courseName = 'Python'
                        courseInstructor = 'Saurabh Shukla'
                    />
                    <CourseCard
                        courseImg = {thumb4}
                        courseRating = '8.0'
                        courseName = 'Java'
                        courseInstructor = 'Shraddha Khapra'
                    />
                    <CourseCard
                        courseImg = {thumb5}
                        courseRating = '6.2'
                        courseName = 'React JS'
                        courseInstructor = 'Vinod Thapa'
                    />
                    <CourseCard
                        courseImg = {thumb1}
                        courseRating = '8.5'
                        courseName = 'Dot Batch'
                        courseInstructor = 'Love Babbar'
                    />
                    <CourseCard
                        courseImg = {thumb2}
                        courseRating = '7.0'
                        courseName = 'S/W Engineering'
                        courseInstructor = 'Gate Smashers'
                    />
                    <CourseCard
                        courseImg = {thumb3}
                        courseRating = '7.9'
                        courseName = 'Python'
                        courseInstructor = 'Saurabh Shukla'
                    />
                    <CourseCard
                        courseImg = {thumb4}
                        courseRating = '8.0'
                        courseName = 'Java'
                        courseInstructor = 'Shraddha Khapra'
                    />
                    <CourseCard
                        courseImg = {thumb5}
                        courseRating = '6.2'
                        courseName = 'React JS'
                        courseInstructor = 'Vinod Thapa'
                    />
                    <CourseCard
                        courseImg = {thumb1}
                        courseRating = '8.5'
                        courseName = 'Dot Batch'
                        courseInstructor = 'Love Babbar'
                    />
                    <CourseCard
                        courseImg = {thumb2}
                        courseRating = '7.0'
                        courseName = 'S/W Engineering'
                        courseInstructor = 'Gate Smashers'
                    />
                    <CourseCard
                        courseImg = {thumb3}
                        courseRating = '7.9'
                        courseName = 'Python'
                        courseInstructor = 'Saurabh Shukla'
                    />
                    <CourseCard
                        courseImg = {thumb4}
                        courseRating = '8.0'
                        courseName = 'Java'
                        courseInstructor = 'Shraddha Khapra'
                    />
                    <CourseCard
                        courseImg = {thumb5}
                        courseRating = '6.2'
                        courseName = 'React JS'
                        courseInstructor = 'Vinod Thapa'
                    />
                    <CourseCard
                        courseImg = {thumb1}
                        courseRating = '8.5'
                        courseName = 'Dot Batch'
                        courseInstructor = 'Love Babbar'
                    />
                    <CourseCard
                        courseImg = {thumb2}
                        courseRating = '7.0'
                        courseName = 'S/W Engineering'
                        courseInstructor = 'Gate Smashers'
                    />
                    <CourseCard
                        courseImg = {thumb3}
                        courseRating = '7.9'
                        courseName = 'Python'
                        courseInstructor = 'Saurabh Shukla'
                    />
                    <CourseCard
                        courseImg = {thumb4}
                        courseRating = '8.0'
                        courseName = 'Java'
                        courseInstructor = 'Shraddha Khapra'
                    />
                    <CourseCard
                        courseImg = {thumb5}
                        courseRating = '6.2'
                        courseName = 'React JS'
                        courseInstructor = 'Vinod Thapa'
                    />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Courses;