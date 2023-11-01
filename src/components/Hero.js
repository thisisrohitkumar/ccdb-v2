import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../resources/assets/images/hero_img.png";

const Hero = () => {
  return (
    <>
      <section className="heroSection">
        <div className="heroDetails">
          <plaintext className="cc">Course Critique</plaintext>
          <plaintext className="db">Database</plaintext>
          <p>
            An online database that contains information about online courses and more. The database includes course instructors details, course details, ratings and reviews. CCDb is the largest and most comprehensive online course database on the web.
          </p>
          <NavLink className='reset-a' to='/courses'><button>Explore Courses</button></NavLink>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
