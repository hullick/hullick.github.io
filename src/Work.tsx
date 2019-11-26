import React from "react";

const Work: React.FC = () => {
    return (
        <div>
            <div className="work-header">
                <div className="title-small"><p>WORKING PROCESS</p></div>
                <h4 className="section-title">How I Work</h4>
            </div>
            <div className="work-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="video-container">
                                <div className="video-area">
                                    <a href="https://www.youtube.com/watch?v=EfTUpvxEbqc"
                                       className="video-play button" target="_self">
                                        <div className="video-icon">
                                            <span>
                                                <i className="fas fa-caret-right"/>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="work-item">
                                <span className="work-title">Discuss &amp; Plan</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                    tempor</p>
                            </div>
                            <div className="work-arrow"/>
                            <div className="work-item">
                                <span className="work-title">Design &amp; Develop</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                    tempor</p>
                            </div>
                            <div className="work-arrow"/>
                            <div className="work-item">
                                <span className="work-title">Final Approach</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                    tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
