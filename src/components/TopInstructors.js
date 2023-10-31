import React from "react";
import InstructorsCard from "./InstructorsCard";
import ins1 from '../resources/assets/images/instructors/gate.jpg'
import ins2 from '../resources/assets/images/instructors/love.jpg'
import ins3 from '../resources/assets/images/instructors/saurabh.jpg'
import ins4 from '../resources/assets/images/instructors/sharaddha.jpg'
import ins5 from '../resources/assets/images/instructors/thapa.jpeg'


const TopInstructors = () => {
    return(
        <>
            <div className="topInstructorsContainer">
                <div className="topInstructorsHeading">
                    <h2>Most Loved Instructors on CCDb</h2>
                    <em>View all</em>
                </div>
                <div className="topInstructors">
                    <InstructorsCard 
                        instructorsImg = {ins2}
                        instructorsRating = '543'
                        instructorsName = 'Love Babbar'    
                    />
                    <InstructorsCard 
                        instructorsImg = {ins3}
                        instructorsRating = '300'
                        instructorsName = 'Saurabh Shukla'    
                    />
                    <InstructorsCard 
                        instructorsImg = {ins1}
                        instructorsRating = '234'
                        instructorsName = 'Gate Smashers'    
                    />
                    <InstructorsCard 
                        instructorsImg = {ins4}
                        instructorsRating = '109'
                        instructorsName = 'Shraddha Khapra'    
                    />
                    <InstructorsCard 
                        instructorsImg = {ins5}
                        instructorsRating = '88'
                        instructorsName = 'Vinod Thapa'    
                    />
                </div>
            </div>
        </>
    )
}

export default TopInstructors