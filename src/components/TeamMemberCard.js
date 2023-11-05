import React from "react";

const TeamMemberCard = (props) => {
    return(
        <>
            <div className="ourTeamCard">
                <div className="memberImgContainer">
                    <img src={props.memberImg} alt="" />
                </div>
                <a href={props.memberLinkedIn} target="_blank" rel="noreferrer" className="memberLinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                <plaintext className="memberName">{props.memberName}</plaintext>
                <plaintext className="memberRole">({props.memberRole})</plaintext>
            </div>
        </>
    )
}

export default TeamMemberCard