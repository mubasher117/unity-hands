import React from "react";
import event1 from "../../images/event/img-1.jpg";
import event2 from "../../images/event/img-2.jpg";
import event3 from "../../images/event/img-3.jpg";
import { Link } from "react-router-dom";

import "./style.css";
import { events } from "../../data/events";

const EventSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="event-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span>Our Events</span>
          <h2>Upcoming Events</h2>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="event-grids clearfix">
              {events.map((event) => (
                <div className="grid">
                  <div className="img-holder">
                    <img src={event.image} alt="" />
                  </div>
                  <div className="details">
                    <ul className="entry-meta">
                      <li>
                        {/* <Link onClick={ClickHandler} to="/event-details"> */}
                          <i className="ti-calendar"></i> {event.date}
                        {/* </Link> */}
                      </li>
                      {/* <li><Link onClick={ClickHandler} to="/event-details"><i className="ti-folder"></i> Education</Link></li> */}
                    </ul>
                    <h3>
                      {/* <Link onClick={ClickHandler} to="/event-details"> */}
                        {event.title}
                      {/* </Link> */}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
