import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstructorsCard from "../components/InstructorsCard";

const Instructors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://ccdbapi.onrender.com/api/instructors?sort=-hearts")
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

  return (
    <>
      <div className="container">
        <Header />
        <div className="instructorContainer">
          <div className="instructorPageHeading">
            <h1>All Instructors</h1>
          </div>
          <div className="instructorCardContainer">
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
        <Footer />
      </div>
    </>
  );
};

export default Instructors;
