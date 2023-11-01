import { React, useEffect } from "react";
import Header from '../components/Header'
import CourseHero from '../components/CourseHero'
import CourseSlider from '../components/CourseSlider'
import TopTen from '../components/TopTen'
import TopInstructors from '../components/TopInstructors'
import Footer from '../components/Footer'
import FooterCourseCategory from '../components/FooterCourseCategory'

const CourseDetails = () =>{
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <div className="container">
                <Header />
                <CourseHero />
                <Footer />
            </div>
        </>
    )
}

export default CourseDetails;