import React from "react";

const CourseCard = (props) => {
    return(
        <>
            <div className="courseCard">
                <img src={props.courseImg} alt="" />
                <plaintext className="courseRating"><i class="fa-solid fa-star"> {props.courseRating}</i>/10</plaintext>
                <plaintext className="courseName">{props.courseName}</plaintext>
                <plaintext className="courseInstructor">{props.courseInstructor}</plaintext>
                <button className="viweCourseBtn">View Course</button>
            </div>
        </>
    )
}

export default CourseCard