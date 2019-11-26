import React from "react";

const Blog: React.FC = () => {
    return (
        <div>
            <div className="blog-header">
                <div className="title-small"><p>SEE MY BLOG</p></div>
                <h4 className="section-title">Latest News</h4>
            </div>
            <div className="blog-content">
                <div className="container">
                    <div className="owl-carousel owl-theme" id="owl-demo-blog">
                        <div className="item row">
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-img">
                                    <img src="/assets/images/blog/blog-img1.jpg" alt="blog1" className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-text">
                                    <p className="blog-title">Single Blog Post Title Goes Here</p>
                                    <p className="blog-detail">
                                        <span>Date:</span>01-03-19
                                        <span>|</span> Posted By <span>Carl Watson</span>
                                    </p>
                                    <p className="blog-description">Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ...
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className='fas fa-angle-double-right'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item row">
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-img">
                                    <img src="/assets/images/blog/blog-img2.jpg" alt="blog2" className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-text">
                                    <p className="blog-title">Single Blog Post Title Goes Here</p>
                                    <p className="blog-detail">
                                        <span>Date:</span>01-03-19
                                        <span>|</span> Posted By <span>Carl Watson</span>
                                    </p>
                                    <p className="blog-description">Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ...
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className='fas fa-angle-double-right'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item row">
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-img">
                                    <img src="/assets/images/blog/blog-img3.jpg" alt="blog3" className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-text">
                                    <p className="blog-title">Single Blog Post Title Goes Here</p>
                                    <p className="blog-detail">
                                        <span>Date:</span>01-03-19
                                        <span>|</span> Posted By <span>Carl Watson</span>
                                    </p>
                                    <p className="blog-description">Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ...
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className='fas fa-angle-double-right'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
