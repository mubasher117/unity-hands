import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import tm1 from "../../images/team/team-1.jpg";
import tm2 from "../../images/team/team-2.jpg";
import tm3 from "../../images/team/team-3.jpg";
import { TeamMember } from "../TeamMember/TeamMember";

const TeamSection = (props) => {
  const teamMembers = [
    {
      id: 1,
      image: tm1,
      name: "Mohsin Rafi",
      designation: "Founder",
    },
    {
      id: 1,
      image: tm1,
      name: "Yasmin Aslam",
      designation: "Founder",
    },
    {
      id: 1,
      image: tm1,
      name: "Afia Malik",
      designation: "Founder",
    },
    {
      id: 1,
      image: tm1,
      name: "Hussien M Saeed",
      designation: "Founder",
    },
  ];
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`team-section section-padding ${props.teamClas}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-6">
            <div className="section-title text-center">
              <span>Meet Our Team</span>
              <h2>Our Expert Volunteer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="team-grids clearfix">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
