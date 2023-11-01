import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";

const FooterCourseCategory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <>
            <div className="footerCourseCategoryContainer">
                <div className="footerCourseCategoryHeading">
                    <h2>Course Categories</h2>
                    <em><NavLink to='/courses' className='reset-a'>View all</NavLink></em>
                </div>
                <div className="footerCourseCategory">
                    <span>
                        <plaintext>Web Development</plaintext>
                    </span>
                    <span>
                        <plaintext>UI/UX Design</plaintext>
                    </span>
                    <span>
                        <plaintext>Game Development</plaintext>
                    </span>
                </div>
                <div className="footerCourseCategory">
                    <span>
                        <plaintext>Programming</plaintext>
                    </span>
                    <span>
                        <plaintext>Android App Development</plaintext>
                    </span>
                    <span>
                        <plaintext>IT and Software</plaintext>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FooterCourseCategory