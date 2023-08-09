import React from "react";

import { Link } from "react-router-dom";
import SidebarWrap from "../SidebarWrap";
import simg from "../../images/event-details.jpg";

import blog3 from "../../images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../images/blog-details/comments-author/img-3.jpg";

import "./style.css";

const CaseSingle = ({ description, image }) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tp-case-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="tp-case-details-wrap">
              <div className="tp-case-details-text">
                <div id="Description">
                  <div
                    className="tp-case-details-img"
                    style={{ textAlign: "center" }}
                  >
                    <img src={image} alt="" />
                  </div>
                  <div className="tp-case-content">
                    <div className="tp-case-text-top">
                      {/* <h2>Ensure Education for every poor children</h2> */}
                      {/* <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"><span>65.5</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><span>Raised:</span> $7,000.00</li>
                                                <li><span>Goal:</span> $8,000.00</li>
                                                <li><span>Donar:</span> 380</li>
                                            </ul> */}
                      <div className="case-b-text">
                        <p>{description}</p>
                      </div>
                      {/* <div className="submit-area sub-btn">
                                                <Link to="/donate" className="theme-btn submit-btn">Donate Now</Link>
                                            </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="tp-blog-single-section wrap-even">
                  <div className="comments-area">
                    <div className="comments-section">
                      <h3 className="comments-title">Comments</h3>
                      <ol className="comments">
                        <li
                          className="comment even thread-even depth-1"
                          id="comment-1"
                        >
                          <div id="div-comment-1">
                            <div className="comment-theme">
                              <div className="comment-image">
                                {" "}
                                <img src={blog3} alt="" />{" "}
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    John Abraham{" "}
                                    <span className="comments-date">
                                      Octobor 28,2018 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{" "}
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      to="/case-single"
                                    >
                                      <i
                                        className="fa fa-reply"
                                        aria-hidden="true"
                                      ></i>
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="children">
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    {" "}
                                    <img src={blog4} alt="" />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        Lily Watson{" "}
                                        <span className="comments-date">
                                          Octobor 28,2018 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{" "}
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          to="/case-single"
                                        >
                                          <span>
                                            <i
                                              className="fa fa-reply"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Reply
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul>
                                <li className="comment">
                                  <div>
                                    <div className="comment-theme">
                                      <div className="comment-image">
                                        <img src={blog5} alt="" />{" "}
                                      </div>
                                    </div>
                                    <div className="comment-main-area">
                                      <div className="comment-wrapper">
                                        <div className="comments-meta">
                                          <h4>
                                            John Abraham{" "}
                                            <span className="comments-date">
                                              Octobor 28,2018 At 9.00am
                                            </span>
                                          </h4>
                                        </div>
                                        <div className="comment-area">
                                          <p>
                                            I will give you a complete account
                                            of the system, and expound the
                                            actual teachings of the great
                                            explorer of the truth,{" "}
                                          </p>
                                          <div className="comments-reply">
                                            <Link
                                              className="comment-reply-link"
                                              to="/case-single"
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-reply"
                                                  aria-hidden="true"
                                                ></i>{" "}
                                                Reply
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Comment</h3>
                    <form onSubmit={SubmitHandler} className="comment-form">
                      <div className="form-inputs">
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Website" type="url" />
                      </div>
                      <div className="form-textarea">
                        <textarea
                          id="comment"
                          placeholder="Write Your Comments..."
                        ></textarea>
                      </div>
                      <div className="form-submit">
                        <input id="submit" value="Reply" type="submit" />
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <SidebarWrap /> */}
        </div>
      </div>
    </div>
  );
};

export default CaseSingle;
