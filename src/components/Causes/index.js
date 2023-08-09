import React from "react";
import { works } from "../../data/works";
import { Work } from "../Work/Work";
import "./style.css";

const Causes = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <div className="thumb-text">
              <span>Projects</span>
            </div>
            <h2>Ongoing Projects</h2>
          </div>
        </div>
        <div className="row">
          {works.map((work) => (
            <Work
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              descriptionFull={work.descriptionFull}
              images={work.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;
