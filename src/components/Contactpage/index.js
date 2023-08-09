import React from 'react';
import ContactForm from '../ContactFrom'
import './style.css'

const Contactpage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        {/* <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div> */}
                        <div className="contact-details">
                            {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. </p> */}
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Location</h5>
                                    <p>689A, Stratford Road, Birmingham, B114DX, UK</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>0121 2930 611</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>info@unityhands4wm.co.uk</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                                <h2>Quick Contact Form</h2>
                            </div>
                            <div className="contact-form">
                                <ContactForm/>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=689A,%20Stratford%20Road%20Birmingham,%20B114DX,%20UK+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
