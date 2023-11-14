import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer>
                <div className="footerMenu">
                    <ul>
                        <li><NavLink className='reset-a' to='/'>Home</NavLink></li>
                        <li><NavLink className='reset-a' to='/team'>Our Team</NavLink></li>
                        <li><NavLink className='reset-a' to='/privacy'>Privacy Policy</NavLink></li>
                    </ul>
                </div>
                <div className="footerCredits">
                    <plaintext>&copy; 2023 by CCDb.in</plaintext>
                    <plaintext>Made with <i className="fa-solid fa-heart"></i> by NITKians</plaintext>
                </div>
            </footer>
        </>
    )
}

export default Footer