import React from "react";
import { NavLink } from "react-router-dom";

import courseHeroImg from "../resources/assets/images/thumbnails/love-babbar.jpg";

const CourseHero = () => {
  return (
    <>
      <section className="courseHeroSection">
        <div className="courseHeroDetails">
          <plaintext className="cc">Love Babbar's</plaintext>
          <plaintext className="db">Dot Batch</plaintext>
          <p>
          A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.
          </p>
          <button><i class="fa-regular fa-star"></i> Rate This Course</button>
        </div>
        <div className="courseHeroImg">
          <img src={courseHeroImg} alt="Course Hero Image" />
        </div>
      </section>
    </>
  );
};

export default CourseHero;
