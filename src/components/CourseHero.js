import React from "react";
import { NavLink } from "react-router-dom";

const CourseHero = (props) => {

  const removeImgFilter = () => {
    const courseHeroImg = document.getElementById('courseHeroImg')
    courseHeroImg.style.filter = 'grayscale(0)'
  }

  const addImgFilter = () => {
    const courseHeroImg = document.getElementById('courseHeroImg')
    courseHeroImg.style.filter = 'grayscale(1)'
  }

  return (
    <>
      <section className="courseHeroSection">
        <div className="courseHeroDetails">
          <plaintext className="cc">{`${props.courseInstructor}'s`}</plaintext>
          <span className="db">
            <p>{props.courseName}</p>
          </span>
          <p>
            {props.courseDesc}
          </p>
          <NavLink to={`/postreview/${props.courseId}`} className='reset-a'>
          <button
            onMouseOver={removeImgFilter}
            onMouseOut={addImgFilter}
          >
            <i class="fa-regular fa-star"></i> Rate This Course
          </button>
          </NavLink>
        </div>
        <div className="courseHeroImg">
          <img src={props.courseImg} alt="Hero" id="courseHeroImg"/>
        </div>
      </section>
    </>
  );
};

export default CourseHero;
