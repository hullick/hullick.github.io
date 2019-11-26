import React from "react";

const Portfolio: React.FC = () => {
    return (
        <div>
            <div className="portfolio-header">
                <div className="title-small"><p>SEE MY WORKS</p></div>
                <h4 className="section-title">Portfolio</h4>
            </div>
            <div className="portfolio-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="portfolio-content-head">
                                <ul className="controls">
                                    <li className="filter" data-filter="all">ALL</li>
                                    <li className="filter" data-filter=".design">DESIGN</li>
                                    <li className="filter" data-filter=".development">DEVELOPMENT</li>
                                    <li className="filter" data-filter=".plugin">PLUGIN</li>
                                    <li className="filter" data-filter=".photography">PHOTOGRAPHY</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div className="portfolio-content-items">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix design">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img1.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">DESIGN</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img1.jpg"
                                                           data-lightbox="image-1">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix plugin">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img2.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">PLUGIN</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img2.jpg"
                                                           data-lightbox="image-2">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix photography">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img3.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">PHOTOGRAPHY</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img3.jpg"
                                                           data-lightbox="image-3">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix design">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img4.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">DESIGN</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img4.jpg"
                                                           data-lightbox="image-4">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix development">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img5.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">DEVELOPMENT</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img5.jpg"
                                                           data-lightbox="image-5">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mix development">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src="/assets/images/portfolio/img6.jpg" alt="portfolio"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="portfolio-overlay">
                                                <div className="overlay-content">
                                                    <div className="overlay-content-item">
                                                        <p className="category">DEVELOPMENT</p>
                                                        <a href="#">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-link"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a href="/assets/images/portfolio/img6.jpg"
                                                           data-lightbox="image-6">
                                                            <div className="magnify-icon">
                                                                <p>
                                                                    <span>
                                                                        <i className="fa fa-search"
                                                                           aria-hidden="true"/>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </a>
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
            </div>
        </div>
    );
}

export default Portfolio;
