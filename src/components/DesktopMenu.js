import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/assets/images/logo.png";

const DesktopMenu = () => {

    const hideDesktopMenu = () => {
        const desktopMenu = document.getElementById("desktopMenu");
        desktopMenu.style.transform = "translateY(-100%)";
      };

    return(<div className="desktopMenu" id="desktopMenu">
    <div className="menuHeader">
      <NavLink to="/" className="reset-a">
        <img src={logo} alt="CCDb Logo" />
      </NavLink>
      <span className="hideDesktopMenu" onClick={hideDesktopMenu}>
        <i className="fa-solid fa-circle-xmark"></i>
      </span>
    </div>
    <div className="desktopMenuItems">
      <ul className="courseCategories">
        <li>Course Categories</li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/ai">
            AI / ML
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/java">
            Java
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/linux">
            Linux
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/web">
            Web Development
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/ui">
            UI/UX Design
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/operating">
            Operating System
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink className="reset-a" to="/courses/dsa">
            Data Structures
          </NavLink>
        </li>
      </ul>
      <ul className="filterCourses">
        <li>Pages</li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/" className="reset-a">
            Home
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/courses" className="reset-a">
            Courses
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/instructors" className="reset-a">
            Instructors
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/team" className="reset-a">
            Our Team
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/privacy" className="reset-a">
            Privacy Policy
          </NavLink>
        </li>
      </ul>
      <ul className="ccdbCommunity">
        <li>CCDb Community</li>
        <li><NavLink to="/login" className="reset-a clickToLoginMob">
                LogIn / SignUp
              </NavLink></li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/about" className="reset-a">
            About CCDb
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <NavLink to="/contact" className="reset-a">
            Contact Us
          </NavLink>
        </li>
        <li onClick={hideDesktopMenu}>
          <a
            className="reset-a"
            href="http://ccdb.in/"
            target="_blank"
            rel="noreferrer"
          >
            Survey Form
          </a>
        </li>
      </ul>
    </div>
  </div>)
}

export default DesktopMenu