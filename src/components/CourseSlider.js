import React from "react";
import Slider from './Slider'
import thumb1 from '../resources/assets/images/thumbnails/love-babbar.jpg'
import thumb2 from '../resources/assets/images/thumbnails/gate-course.jpg'
import thumb3 from '../resources/assets/images/thumbnails/saurabh-course.jpg'
import thumb4 from '../resources/assets/images/thumbnails/shraddha-course.jpg'
import thumb5 from '../resources/assets/images/thumbnails/thapa-course.jpg'

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
                        <em>View all</em>
                    </div>
                    <div className="upc">
                        <img src={thumb1} alt="" />
                        <span>
                            <em>Launch Date : 24/08/2023</em>
                            <h3>Dot Batch</h3>
                            <p>by Love Babbar</p>
                        </span>
                    </div>
                    <div className="upc">
                        <img src={thumb2} alt="" />
                        <span>
                            <em>Launch Date : 24/08/2023</em>
                            <h3>S/W Engineering</h3>
                            <p>by Gate Smashers</p>
                        </span>
                    </div>
                    <div className="upc">
                        <img src={thumb3} alt="" />
                        <span>
                            <em>Launch Date : 8/11/2023</em>
                            <h3>Python</h3>
                            <p>by Saurabh Shukla</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseSlider