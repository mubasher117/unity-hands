import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../images/cause/img-1.png";

export const Work = ({
  title,
  description,
  image,
  descriptionFull,
  images,
}) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="col-xl-4 col-lg-6 col-12">
      <div className="cause-item">
        <div className="cause-top">
          <div className="cause-img">
            <img src={image} alt="" />
            {/* <div className="case-btn">
                <Link onClick={ClickHandler} to="/donate" className="theme-btn">
                  Donate Now
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div> */}
          </div>
        </div>
        <div className="cause-text">
          {/* <ul>
              <li>
                <Link onClick={ClickHandler} to="/">
                  GOAL : $9860
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/">
                  RISED : $768
                </Link>
              </li>
            </ul> */}
          <h3>
            <Link
              onClick={ClickHandler}
              to="/case-single"
              state={{
                title,
                description,
                image,
                descriptionFull,
                images,
              }}
            >
              {title}
            </Link>
          </h3>
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
};
