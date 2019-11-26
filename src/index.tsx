import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import * as serviceWorker from './serviceWorker';
import Welcome from "./Welcome";
import Service from "./Service";
import Portfolio from "./Portfolio";
import ClientTestimonial from "./ClientTestimonial";
import Work from "./Work";
import Resume from "./Resume";
import Blog from "./Blog";
import Contact from "./Contact";

ReactDOM.render(<Welcome />, document.getElementById('welcome-section'));
ReactDOM.render(<About />, document.getElementById('about-section'));
ReactDOM.render(<Service />, document.getElementById('service-section'));
ReactDOM.render(<Resume />, document.getElementById('resume-section'));
ReactDOM.render(<Portfolio />, document.getElementById('portfolio-section'));
ReactDOM.render(<Work />, document.getElementById('work-section'));
ReactDOM.render(<ClientTestimonial />, document.getElementById('client-testimonial-section'));
ReactDOM.render(<Blog />, document.getElementById('blog-section'));
ReactDOM.render(<Contact />, document.getElementById('contact-section'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
