import React from "react";
import { NavLink } from "react-router-dom";

const FooterCourseCategory = () => {
    return(
        <>
            <div className="footerCourseCategoryContainer">
                <div className="footerCourseCategoryHeading">
                    <h2>Course Categories</h2>
                    <em>View all</em>
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