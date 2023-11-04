import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";

const FooterCourseCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="footerCourseCategoryContainer">
        <div className="footerCourseCategoryHeading">
          <h2>Course Categories</h2>
          <em>
            <NavLink to="/courses" className="reset-a">
              View all
            </NavLink>
          </em>
        </div>
        <div className="footerCourseCategory">
          <NavLink className="reset-a" to="/courses/web">
            <plaintext>Web Development</plaintext>
          </NavLink>
          <NavLink className="reset-a" to="/courses/ai">
            <plaintext>AI / ML</plaintext>
          </NavLink>
          <NavLink className="reset-a" to="/courses/dsa">
            <plaintext>Data Structures</plaintext>
          </NavLink>
        </div>
        <div className="footerCourseCategory">
          <NavLink className="reset-a" to="/courses/java">
            <plaintext>Java</plaintext>
          </NavLink>
          <NavLink className="reset-a" to="/courses/operating">
            <plaintext>Operating System</plaintext>
          </NavLink>
          <NavLink className="reset-a" to="/courses/ui">
            <plaintext>UI / UX Design</plaintext>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FooterCourseCategory;
