import React from "react";

const InstructorsCard = (props) => {
    return(
        <>
            <div className="instructorsCard">
                <div className="instructorImgContainer">
                    <img src={props.instructorsImg} alt="" />
                </div>
                <plaintext className="instructorsRating"><i className="fa-solid fa-heart"></i> {props.instructorsRating}</plaintext>
                <plaintext className="instructorsName">{props.instructorsName}</plaintext>
            </div>
        </>
    )
}

export default InstructorsCard