import React from "react";
import { NavLink } from "react-router-dom";
import CourseCard from "./CourseCard";
import thumb1 from '../resources/assets/images/thumbnails/love-babbar.jpg'
import thumb2 from '../resources/assets/images/thumbnails/gate-course.jpg'
import thumb3 from '../resources/assets/images/thumbnails/saurabh-course.jpg'
import thumb4 from '../resources/assets/images/thumbnails/shraddha-course.jpg'
import thumb5 from '../resources/assets/images/thumbnails/thapa-course.jpg'

const TopTen = () => {

    return(
        <>
            <section className="topTenContainer">
                <div className="topTenHeading">
                    <h2>Top 5 Courses on CCDb</h2>
                    <em><NavLink to='/courses' className='reset-a'>View all</NavLink></em>
                </div>
                <div className="topTenCourses">
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
            </section>
        </>
    )
}

export default TopTen