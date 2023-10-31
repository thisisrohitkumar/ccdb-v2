import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer>
                <div className="footerMenu">
                    <ul>
                        <li><NavLink className='reset-a' to='/'>Advertising</NavLink></li>
                        <li><NavLink className='reset-a' to='/'>Privacy Policy</NavLink></li>
                        <li><NavLink className='reset-a' to='/'>Site Map</NavLink></li>
                        <li><NavLink className='reset-a' to='/team'>Our Team</NavLink></li>
                    </ul>
                </div>
                <div className="footerCredits">
                    <plaintext>&copy; 2023 by CCDb.in</plaintext>
                    <plaintext>Made with <i class="fa-solid fa-heart"></i> by NITKians</plaintext>
                </div>
            </footer>
        </>
    )
}

export default Footer