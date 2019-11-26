import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <div className="contact-header">
                <div className="title-small"><p>CONTACT ME</p></div>
                <h4 className="section-title">Get In Touch</h4>
            </div>
            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-detail">
                                <h6>Contact</h6>
                                <p className="contact-text">Nam libero tempore, cum soluta nobis est eligendi optio
                                    cumque nihil impedit quo minus id quod maxime placeatw.</p>
                                <p className="adress">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                    <span>Address:</span>
                                    <span className="adress-loc">10,Park Strgfyguhijeet,London,UK.</span>
                                </p>
                                <p className="phone">
                                    <i className="fa fa-phone" aria-hidden="true"/>
                                    <span>Contact no:</span>+999000000
                                </p>
                                <p className="email">
                                    <i className="fas fa-envelope" aria-hidden="true"/>
                                    <span>Email:</span>abcdefg@gmail.com
                                </p>
                                <p>
                                    <i className="fa fa-globe" aria-hidden="true"/>
                                    <span>Website:</span><a href="#">www.abcd.com</a>
                                </p>
                                <div className="social-icons">
                                    <p>Find:</p>
                                    <a href="#"><i className="fab fa-facebook-f"/></a>
                                    <a href="#"><i className="fab fa-twitter"/></a>
                                    <a href="#"><i className="fab fa-google"/></a>
                                    <a href="#"><i className="fab fa-skype"/></a>
                                    <a href="#"><i className="fab fa-linkedin-in"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <form className="contact-form-area" action="contact.php" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" placeholder="Name" id="form-name"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="email" placeholder="Email" id="form-email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" name="subject" placeholder="Subject"
                                                   id="form-subject"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                                    <textarea placeholder="Type here" name="message"
                                                              id="form-message"/>
                                            <input type="submit" className="submit-btn btn-style1 clearfix"
                                                   value="Submit" id="contact-submit"/>
                                            <div className="result"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2019 Rivo | All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
