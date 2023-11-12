import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import InstructorsCard from "./InstructorsCard";


const TopInstructors = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    
        fetch("https://ccdbapi.onrender.com/api/instructors?limit=5&sort=-hearts")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            // console.log(data.courses[0]);
            setData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return(
        <>
            <div className="topInstructorsContainer">
                <div className="topInstructorsHeading">
                    <h2>Most Loved Instructors on CCDb</h2>
                    <em><NavLink to='/instructors' className='reset-a'>View all</NavLink></em>
                </div>
                <div className="topInstructors">
                {data &&
              data?.instructors &&
              data?.instructors?.map((item) => (

                <InstructorsCard
                  instructorsImg={item.image}
                  instructorsRating={item.hearts}
                  instructorsName={item.name}
                />
              ))}
                </div>
            </div>
        </>
    )
}

export default TopInstructors