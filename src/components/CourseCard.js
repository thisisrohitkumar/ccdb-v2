import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = (props) => {
    return(
        <>
            <div className="courseCard">
                <img src={props.courseImg} alt="Course Thumbnail" />
                <plaintext className="courseRating"><i className="fa-solid fa-star"> {props.courseRating}</i>/10</plaintext>
                <plaintext className="courseName">{props.courseName}</plaintext>
                <plaintext className="courseInstructor">{`by ${props.courseInstructor}`}</plaintext>
                <NavLink to={`/courses-details/${props.id}`} className='reset-a'><button className="viweCourseBtn">View Course</button></NavLink>
            </div>
        </>
    )
}

export default CourseCard