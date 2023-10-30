import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CourseSlider from '../components/CourseSlider'
import TopTen from '../components/TopTen'
import Footer from '../components/Footer'

const Home = () =>{
    return(
        <>
            <div className="container">
                <Header />
                <Hero />
                <CourseSlider />
                <TopTen />
                <Footer />
            </div>
        </>
    )
}

export default Home;