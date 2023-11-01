import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamMemberCard from '../components/TeamMemberCard'
import member1 from '../resources/assets/images/team/rohit.jpg'
import member2 from '../resources/assets/images/team/rajesh.jpg'
import member3 from '../resources/assets/images/team/vishal.jpg'
import member4 from '../resources/assets/images/team/yash.jpg'
import member5 from '../resources/assets/images/team/mayank.jpeg'
// import member6 from '../resources/assets/images/team/ashu'
import member7 from '../resources/assets/images/team/amit.jpg'
import member8 from '../resources/assets/images/team/govind.jpg'
import member9 from '../resources/assets/images/team/mohit.jpg'
import member10 from '../resources/assets/images/team/ramveer.jpg'
import member11 from '../resources/assets/images/team/satyendra.jpg'
import member12 from '../resources/assets/images/team/shanu.jpg'
// import member13 from '../resources/assets/images/team/haris'
const Team = () => {
  return(
    <>
      <div className="container">
        <Header />
        <div className="ourTeamContainer">
                <div className="ourTeamHeading">
                    <h2>Our Team</h2>
                </div>
                <div className="ourTeam">
                    <TeamMemberCard 
                        memberImg = {member1}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member2}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member3}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member4}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member5}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member1}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member7}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member8}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member9}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member10}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member11}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member12}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                    <TeamMemberCard 
                        memberImg = {member1}
                        memberLinkedIn = 'https://www.linkedin.com/in/thisisrohitkumar/'
                        memberName = 'Rohit Kumar'
                        memberRole = 'Project Manager'    
                    />
                </div>
            </div>
        <Footer />
      </div>
    </>
  )
}

export default Team;
