import React from "react";

const Resume: React.FC = () => {
    return (
        <div>
            <div className="resume-header">
                <div className="title-small"><p>MY RESUME</p></div>
                <h4 className="section-title">My Resume</h4>
            </div>
            <div className="resume-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="education">
                                <div className="resume-item">
                                    <p className="res-year">2006-2010</p>
                                    <p className="res-title">Bachelor - XYZ University</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                                <div className="resume-item">
                                    <p className="res-year">2006-2010</p>
                                    <p className="res-title">Masters - XYZ University</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                                <div className="resume-item">
                                    <p className="res-year">2006-2010</p>
                                    <p className="res-title">PhD - XYZ University</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="experience">
                                <div className="resume-item">
                                    <p className="res-year">2011-2013</p>
                                    <p className="res-title">UI/UX Developer - Themeforest</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                                <div className="resume-item">
                                    <p className="res-year">2014-2016</p>
                                    <p className="res-title">Junior Developer - Creative Media</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                                <div className="resume-item">
                                    <p className="res-year">2017-2019</p>
                                    <p className="res-title">Senior Developer - Creative Media</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
