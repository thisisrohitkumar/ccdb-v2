import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../resources/assets/images/logo.png'

const Header = () => {

    const showDesktopMenu = () => {
        const desktopMenu = document.getElementById('desktopMenu')
        desktopMenu.style.transform = 'translateY(0%)'
    }

    const hideDesktopMenu = () => {
        const desktopMenu = document.getElementById('desktopMenu')
        desktopMenu.style.transform = 'translateY(-100%)'
    }

    const showUserMenu = () => {
        const userBox = document.getElementById('userBox')
        const userMenu = document.getElementById('userMenu')
        const caret = document.getElementById('caret')
        userMenu.classList.toggle('show')
        userBox.classList.toggle('boxShadow')
        caret.classList.toggle('flipHorizontal')
    }

    return(
        <>
            <header>
                <div className="logoBox">
                    <NavLink to='/' className='reset-a'>
                        <span className="logo">
                            <img src={logo} alt="CCDb Logo" />
                        </span>
                    </NavLink>
                </div>
                <span className="desktopMenuIcon" onClick={showDesktopMenu}>
                    <i className="fa-solid fa-bars"></i>
                    <plaintext>Menu</plaintext>   
                </span>
                <div className="searchBox">
                    <form>
                        <input type="search" placeholder="Search your courses here..." />
                        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                <div className="userBoxContainer">
                    <span className="userBox" id="userBox" onClick={showUserMenu}>
                        <i className="fa-solid fa-circle-user"></i>
                        <plaintext className="username">Username</plaintext>                     
                        <i className="fa-solid fa-caret-down" id="caret"></i>
                    </span>
                    <span className="userMenu" id="userMenu">
                        <ul>
                            <li><i class="fa-regular fa-address-card"></i> Dashboard</li>
                            <li><i class="fa-solid fa-star-half-stroke"></i> Your Ratings</li>
                            <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</li>
                        </ul>
                    </span>
                    <span className="userBox hide">
                        <NavLink to='/login' className='reset-a clickToLogin'>LogIn / SignUp</NavLink>
                    </span>
                </div>
            </header>
            <div className="desktopMenu" id="desktopMenu">
                <div className="menuHeader">
                    <NavLink to='/' className='reset-a'><img src={logo} alt="CCDb Logo" /></NavLink>
                    <span className="hideDesktopMenu" onClick={hideDesktopMenu}><i class="fa-solid fa-circle-xmark"></i></span>
                </div>
                <div className="desktopMenuItems">
                    <ul className="courseCategories">
                        <li>Course Categories</li>
                        <li onClick={hideDesktopMenu}>Web Development</li>
                        <li onClick={hideDesktopMenu}>UI/UX Design</li>
                        <li onClick={hideDesktopMenu}>Android App Development</li>
                        <li onClick={hideDesktopMenu}>Programming</li>
                        <li onClick={hideDesktopMenu}>Game Developemnt</li>
                        <li onClick={hideDesktopMenu}>IT and Software</li>
                    </ul>
                    <ul className="filterCourses">
                        <li>Pages</li>
                        <li onClick={hideDesktopMenu}><NavLink to='/' className='reset-a'>Home</NavLink></li>
                        <li onClick={hideDesktopMenu}><NavLink to='/courses' className='reset-a'>Courses</NavLink></li>
                        <li onClick={hideDesktopMenu}><NavLink to='/instructors' className='reset-a'>Instructors</NavLink></li>
                        <li onClick={hideDesktopMenu}><NavLink to='/team' className='reset-a'>Our Team</NavLink></li>
                        <li onClick={hideDesktopMenu}><NavLink to='/privacy' className='reset-a'>Privacy Policy</NavLink></li>
                    </ul>
                    <ul className="ccdbCommunity">
                        <li>CCDb Community</li>
                        <li onClick={hideDesktopMenu}>About CCDb</li>
                        <li onClick={hideDesktopMenu}>Contact Us</li>
                        <li onClick={hideDesktopMenu}><a className="reset-a" href="http://ccdb.in/" target="_blank">Survey Form</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;