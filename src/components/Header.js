import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import logo from "../resources/assets/images/logo.png";
import DesktopMenu from "./DesktopMenu";

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
                <li>
                  <NavLink className='reset-a' to='/dashboard'><i class="fa-regular fa-id-badge"></i> Dashboard</NavLink>
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
      <DesktopMenu />
    </>
  );
};

export default Header;
