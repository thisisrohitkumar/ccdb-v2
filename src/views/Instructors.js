import { React, useEffect } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import InstructorsCard from "../components/InstructorsCard";
import ins1 from '../resources/assets/images/instructors/gate.jpg'

import instructorData from "../rawData/instructorData";

const Instructors = () =>{
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return(
        <>
            <div className="container">
                <Header />
                <div className="instructorContainer">
                    <div className="instructorPageHeading">
                      <h1>All Instructors</h1>
                    </div>
                    <div className="instructorCardContainer">
                        {instructorData.map((val)=>{
                            return(<InstructorsCard
                                instructorsImg = {ins1}
                                instructorsRating = {val.hearts}
                                instructorsName = {val.name}
                                />)
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Instructors;