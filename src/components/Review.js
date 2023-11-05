import React from "react";

const Review = (props) => {
    return(
        <>
            <div className="singleReviewContainer">
                <p><span>Rating :</span> {props.rating}</p>
                <p><span>Review :</span> {props.reviewText}</p>
                <p><span>Reviewed By :</span> {props.userId}</p>
            </div>
        </>
    )
}

export default Review