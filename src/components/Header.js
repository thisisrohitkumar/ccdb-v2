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
                        <plaintext>Username</plaintext>                     
                        <i className="fa-solid fa-caret-down" id="caret"></i>
                    </span>
                    <span className="userMenu" id="userMenu">
                        <ul>
                            <li><i class="fa-regular fa-address-card"></i> Dashboard</li>
                            <li><i class="fa-regular fa-floppy-disk"></i> Watchlist</li>
                            <li><i class="fa-solid fa-star-half-stroke"></i> Your Ratings</li>
                            <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</li>
                        </ul>
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
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>Android App Development</li>
                        <li>Programming</li>
                        <li>Game Developemnt</li>
                        <li>IT and Software</li>
                    </ul>
                    <ul className="filterCourses">
                        <li>Filter Courses</li>
                        <li>Best Selling</li>
                        <li>Top Ratings</li>
                        <li>Recently Launched</li>
                        <li>Most Watched</li>
                        <li>Upcoming</li>
                    </ul>
                    <ul className="ccdbCommunity">
                        <li>CCDb Community</li>
                        <li>About CCDb</li>
                        <li>Contact Us</li>
                        <li><a className="reset-a" href="http://ccdb.in/" target="_blank">Survey Form</a></li>
                        <li><NavLink to='/team' className='reset-a'>Our Team</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;