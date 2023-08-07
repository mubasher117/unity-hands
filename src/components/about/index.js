import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo";
import abimg2 from "../../images/img-1.png";
import "./style.css";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-img">
              <img src={props.AbImg} alt="" />
              <VideoModal />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <p>
                Today’s era is marred by significant challenges, leading to
                economic hardship and profound impacts on people's lives. The
                rising cost of living results in scarcity of job opportunities,
                leaving many unemployed and financially vulnerable. Basic
                necessities like food become unaffordable for the less
                fortunate, leading to hunger and poverty.
              </p>
              <p>
                The economic difficulties have alarming consequences on
                education, with disadvantaged communities facing barriers to
                accessing quality education, perpetuating social inequalities.
                Additionally, domestic violence surges, especially affecting
                vulnerable women and children, as financial strains exacerbate
                tensions within households.
              </p>
              <p>
                Addressing these challenges requires thoughtful policies and
                collective efforts to promote economic stability and social
                well-being. Our mission is to provide job opportunities,
                assistance to the impoverished, and raise awareness about the
                importance of education. We actively work to address domestic
                violence, aiming to create a safer and more caring community.
              </p>
              <p>
                Join us in supporting those facing challenges, helping them live
                happier and peaceful lives. Together, we can make a positive
                impact, offering a helping hand to build a better future for
                all. Let's work hand in hand, supporting one another in
                achieving a brighter and more prosperous tomorrow.
              </p>
              <div className="btns">
                <div>
                  <Link
                    onClick={ClickHandler}
                    className="theme-btn"
                    to="/about"
                  >
                    More About Us..
                  </Link>
                </div>
              </div>
              {/* <div className="signature">
                <img src={abimg2} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
