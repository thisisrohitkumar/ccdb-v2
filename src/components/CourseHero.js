import React from "react";

const CourseHero = (props) => {
  return (
    <>
      <section className="courseHeroSection">
        <div className="courseHeroDetails">
          <plaintext className="cc">Love Babbar's</plaintext>
          <span className="db">
            <p>{props.courseName}</p>
          </span>
          <p>
            {props.courseDesc}
          </p>
          <button><i class="fa-regular fa-star"></i> Rate This Course</button>
        </div>
        <div className="courseHeroImg">
          <img src={props.courseImg} alt="Hero" />
        </div>
      </section>
    </>
  );
};

export default CourseHero;
