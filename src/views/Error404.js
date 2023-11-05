import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Error404 = () =>{
    return(
        <>
            <div className="container">
                <Header />
                <div className="errorContainer">
                    <plaintext><i className="fa-solid fa-face-sad-tear"></i> Page Not Found</plaintext>
                    <NavLink to='/' className='reset-a visitHome'><i className="fa-solid fa-house"></i> Visit Home Page</NavLink>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Error404;