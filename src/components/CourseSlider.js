import React from "react";
import Slider from './Slider'
import thumb1 from '../resources/assets/images/thumbnails/love-babbar.jpg'
import { NavLink } from "react-router-dom";

const CourseSlider = () => {
    return(
        <>
            <section className="courseSliderContainer">
                <div className="courseSlider">
                    <Slider />
                </div>
                <div className="upcomingCourses">
                    <div className="upcHeading">
                        <h3>Upcoming Courses</h3>
                        <NavLink to='/courses' className='reset-a'><em>View all</em></NavLink>
                    </div>
                    <NavLink to='/courses-details' className='reset-a'>
                    <div className="upc">
                        <img src={thumb1} alt="" />
                        <span>
                            <em>Launch Date : 24/08/2023</em>
                            <h3>Dot Batch</h3>
                            <p>by Love Babbar</p>
                        </span>
                    </div>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default CourseSlider