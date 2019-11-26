import React from "react";

const Service: React.FC = () => {
    return (
        <div>
            <div className="display-table">
                <div className="title-small"><p>My SERVICES</p></div>
                <h4 className="section-title">What I Offer</h4>
            </div>
            <div className="service-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-lightbulb"></i></span>
                                <p className="content-title">UNIQUE IDEAS</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-pencil-ruler"></i></span>
                                <p className="content-title">WEB DESIGN</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-laptop-code"></i></span>
                                <p className="content-title">THEME DEVELOPMENT</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-pen-nib"></i></span>
                                <p className="content-title">CONTENT WRITING</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-headphones"></i></span>
                                <p className="content-title">24/7 SUPPORT</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-item">
                                <span><i className="fas fa-hammer"></i></span>
                                <p className="content-title">EASY TO CUSTOMIZE</p>
                                <p className="content-text">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium sit voluptatem accusantium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
