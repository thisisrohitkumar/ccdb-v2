import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CourseHero = (props) => {

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    // Retrieve user data from session storage
    const userDataJSON = sessionStorage.getItem("userData");
    if (userDataJSON) {
      // Parse the JSON data to get the user object
      const userData = JSON.parse(userDataJSON);
      setUserData(userData);
    }
  }, []);

  const removeImgFilter = () => {
    const courseHeroImg = document.getElementById('courseHeroImg')
    courseHeroImg.style.filter = 'grayscale(0)'
  }

  const addImgFilter = () => {
    const courseHeroImg = document.getElementById('courseHeroImg')
    courseHeroImg.style.filter = 'grayscale(1)'
  }

  let navigateTo = ''
  if(userData){
    navigateTo = `/postreview/${props.courseId}`
  }
  else{
    navigateTo = '/login'
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
          <plaintext className="courseRating"><i className="fa-solid fa-star"> {props.courseRating}</i>/10</plaintext>
          <br />
          <NavLink to={navigateTo} className='reset-a'>
          <button
            onMouseOver={removeImgFilter}
            onMouseOut={addImgFilter}
          >
            <i className="fa-regular fa-star"></i> Rate This Course
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
