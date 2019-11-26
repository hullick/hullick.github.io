import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <div className="about-header">
                <div className="title-small"><p>ABOUT ME</p></div>
            </div>
            <div className="content-container">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <div className="about-img">
                                        <img src="/assets/images/about.jpg" alt="" className="img-responsive" />
                                            <div className="img-hover">
                                                <a href="#">Download my CV</a>
                                            </div>
                                            <div className="img-overlay"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="about-content">
                                        <h4 className="section-title">
                                            Hello! I am Kevin Watson
                                        </h4>
                                        <p className="about-text">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div className="skills">
                                            <div className="progressbar-area">
                                                <h6>Html</h6>
                                                <div className="progress">
                                                    <div className="progress-bar prog1" role="progressbar"
                                                         aria-valuenow={80}
                                                         aria-valuemin={0} aria-valuemax={100} data-progress="80%">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                                {/*<h6>Css</h6>*/}
                                                {/*<div className="progress">*/}
                                                {/*    <div className="progress-bar prog2" role="progressbar"*/}
                                                {/*         aria-valuenow="90"*/}
                                                {/*         aria-valuemin="0" aria-valuemax="100" data-progress="94%">*/}

                                                {/*        <span>90%</span>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                {/*<h6>JavaScript</h6>*/}
                                                {/*<div className="progress">*/}
                                                {/*    <div className="progress-bar prog3" role="progressbar"*/}
                                                {/*         aria-valuenow="86"*/}
                                                {/*         aria-valuemin="0" aria-valuemax="100" data-progress="86%">*/}

                                                {/*        <span>86%</span>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
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

export default About;
