import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import logo from "../resources/assets/images/logo.png";

const Header = () => {
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

  const showDesktopMenu = () => {
    const desktopMenu = document.getElementById("desktopMenu");
    desktopMenu.style.transform = "translateY(0%)";
  };

  const hideDesktopMenu = () => {
    const desktopMenu = document.getElementById("desktopMenu");
    desktopMenu.style.transform = "translateY(-100%)";
  };

  const showUserMenu = () => {
    const userBox = document.getElementById("userBox");
    const userMenu = document.getElementById("userMenu");
    const caret = document.getElementById("caret");
    userMenu.classList.toggle("show");
    userBox.classList.toggle("boxShadow");
    caret.classList.toggle("flipHorizontal");
  };

  function userLogout(){
    sessionStorage.removeItem('userData'); // Remove a specific item from session storage
    navigate(`/`)
  }

  return (
    <>
      <header>
        <div className="logoBox">
          <NavLink to="/" className="reset-a">
            <span className="logo">
              <img src={logo} alt="CCDb Logo" />
            </span>
          </NavLink>
        </div>
        <span className="desktopMenuIcon" onClick={showDesktopMenu}>
          <i className="fa-solid fa-bars"></i>
          <plaintext>Menu</plaintext>
        </span>

        <Search />

        {userData ? (
          <div className="userBoxContainer">
            <span className="userBox" id="userBox" onClick={showUserMenu}>
              <i className="fa-solid fa-circle-user"></i>
              <plaintext className="username">{userData.email.toUpperCase()}</plaintext>
              <i className="fa-solid fa-caret-down" id="caret"></i>
            </span>
            <span className="userMenu" id="userMenu">
              <ul>
                {/* <li>
                  <i className="fa-regular fa-address-card"></i> Dashboard
                </li> */}
                <li>
                  <i className="fa-solid fa-star-half-stroke"></i> Your Ratings
                </li>
                <li onClick={userLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </li>
              </ul>
            </span>
          </div>
        ) : (
          <div className="userBoxContainer">
            <span className="userBox">
              <NavLink to="/login" className="reset-a clickToLogin">
                LogIn / SignUp
              </NavLink>
            </span>
          </div>
        )}
      </header>
      <div className="desktopMenu" id="desktopMenu">
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
      </div>
    </>
  );
};

export default Header;
