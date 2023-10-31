import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CourseSlider from '../components/CourseSlider'
import TopTen from '../components/TopTen'
import TopInstructors from '../components/TopInstructors'
import Footer from '../components/Footer'
import FooterCourseCategory from '../components/FooterCourseCategory'

const Home = () =>{
    return(
        <>
            <div className="container">
                <Header />
                <Hero />
                <CourseSlider />
                <TopTen />
                <TopInstructors />
                <FooterCourseCategory />
                <Footer />
            </div>
        </>
    )
}

export default Home;