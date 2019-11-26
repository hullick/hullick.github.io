import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div>
            <div className="content-container">
                <div className="overlayImg"></div>
                <div className="title-small"><p>HOME</p></div>
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="welcome-text">
                                        <div className="type-wrap">
                                            <div id="typed-strings">
                                                <h1>I'm <span>Kevin Watson</span></h1>
                                                <h1>I'm a <span>Designer</span></h1>
                                            </div>
                                            <span id="typed"></span>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut.</p>
                                        <div className="social-icons">
                                            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                            <a href="#"><i className="fab fa-skype"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
