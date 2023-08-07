import React from "react";
import { Link } from "react-router-dom";
import tm1 from "../../images/team/team-1.jpg";
import tm2 from "../../images/team/team-2.jpg";
import tm3 from "../../images/team/team-3.jpg";

export const TeamMember = ({ name, designation, image }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="grid">
      <div className="img-holder">
        <img src={tm1} alt="" />
      </div>
      <div className="details">
        <h3>
          <Link onClick={ClickHandler} to="/volunteer">
            {name}
          </Link>
        </h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};
