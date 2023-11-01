import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = (props) => {
    return(
        <>
            <div className="courseCard">
                <img src={props.courseImg} alt="" />
                <plaintext className="courseRating"><i class="fa-solid fa-star"> {props.courseRating}</i>/10</plaintext>
                <plaintext className="courseName">{props.courseName}</plaintext>
                <plaintext className="courseInstructor">{props.courseInstructor}</plaintext>
                <NavLink to='/courses-details' className='reset-a'><button className="viweCourseBtn">View Course</button></NavLink>
            </div>
        </>
    )
}

export default CourseCard