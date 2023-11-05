import { React, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard";
import teamMembers from '../rawData/teamMembers'
const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div className="ourTeamContainer">
          <div className="ourTeamHeading">
            <h2>Our Beloved Team <i className="fa-solid fa-heart"></i></h2>
          </div>
          <div className="ourTeam">

            {teamMembers.map((val) => {
              return(
                <TeamMemberCard
                memberLinkedIn={val.linkedIn}
                memberName={val.name}
                memberRole={val.role}
                memberImg={val.image}
            />
              )
            })}

            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
