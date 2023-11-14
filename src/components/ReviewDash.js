import React from "react";
import { NavLink } from "react-router-dom";

const ReviewDash = (props) => {
    return(
        <>
            <div className="singleReviewContainer">
                <p><NavLink className='reset-a viewCourseLink' to={`/courses-details/${props.courseId}`}>View Course</NavLink></p>
                <p><span>Rating :</span> {props.rating}</p>
                <p><span>Review :</span> {props.reviewText}</p>
            </div>
        </>
    )
}

export default ReviewDash