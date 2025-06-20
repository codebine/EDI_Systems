/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React , { useEffect }from 'react';
import { NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/css'
import '../css/style.css'
import '../css/home.css'
import '../css/owl.css'
import '../css/animate.css'
import '../css/flex-slider.css'
import serviceImage from '../images/service-01.png';
import serviceImage2 from '../images/service-02.png';
import serviceImage3 from '../images/service-03.png';
import Course1 from '../images/course-01.jpg';
import Course2 from '../images/course-02.jpg';
import Course3 from '../images/course-03.jpg';
import Course4 from '../images/course-04.jpg';
import Course5 from '../images/course-05.jpg';
import Course6 from '../images/course-06.jpg';
import Member1 from '../images/member-01.jpg';
import Member2 from '../images/member-02.jpg';
import Member3 from '../images/member-03.jpg';
import Member4 from '../images/member-04.jpg';
import Testimonial1 from '../images/testimonial-author.jpg';
import Event1 from '../images/event-01.jpg';
import Event2 from '../images/event-02.jpg';
import Event3 from '../images/event-03.jpg';

const Home = () => {
     useEffect(() => {
    const filterLinks = document.querySelectorAll('.event_filter a');
    const courseBoxes = document.querySelectorAll('.event_box .event_outer');

    filterLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // Remove active class from all
        filterLinks.forEach(l => l.classList.remove('is_active'));
        link.classList.add('is_active');

        const filter = link.getAttribute('data-filter');

        courseBoxes.forEach(box => {
          if (filter === '*') {
            box.style.display = 'block';
          } else if (box.classList.contains(filter.substring(1))) {
            box.style.display = 'block';
          } else {
            box.style.display = 'none';
          }
        });
      });
    });

    // Cleanup listeners on unmount
    return () => {
      filterLinks.forEach(link => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);
    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="index.html" className="logo">
                                    <h1>EDI Systems</h1>
                                </a>
                                <ul className="nav">
                                    <li className="scroll-to-section"><a><NavLink to="/" className="active">Home</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/About">About</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/Services">Services</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/Technologies">Technologies</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/Consulting">Consulting</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/Products">Products</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/Contact">Contact</NavLink></a></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* The Carousel component wraps your individual items */}
                            <Carousel
                                showArrows={true}        // Show next/prev arrows (as in your image)
                                showStatus={false}       // Hide "1 of 3" text
                                showThumbs={false}       // Hide thumbnail navigation
                                infiniteLoop={true}      // Loop back to start after last slide
                                autoPlay={true}          // Auto-play the slides
                                interval={5000}          // Time between slides (5 seconds)
                                transitionTime={1000}    // Duration of the slide transition
                                showIndicators={true}    // Show pagination dots (as in your image)
                                stopOnHover={false}      // Continue autoplay even when hovering
                                swipeable={true}         // Enable swipe gestures
                                dynamicHeight={false}    // If slides have varying heights, set to true
                            >
                                {/* Each child of Carousel is a slide item */}
                                <div className="item item-1">
                                    <div className="header-text">
                                        <span className="category">Our Courses</span>
                                        <h2>With Scholar Teachers, Everything Is Easier</h2>
                                        <p>Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>
                                        <div className="buttons">
                                            <div className="main-button">
                                                <a href="#">Request Demo</a>
                                            </div>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-play"></i> What's Scholar?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item item-2">
                                    <div className="header-text">
                                        <span className="category">Best Result</span>
                                        <h2>Get the best result out of your effort</h2>
                                        <p>You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.</p>
                                        <div className="buttons">
                                            <div className="main-button">
                                                <a href="#">Request Demo</a>
                                            </div>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-play"></i> What's the best result?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item item-3">
                                    <div className="header-text">
                                        <span className="category">Online Learning</span>
                                        <h2>Online Learning helps you save the time</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.</p>
                                        <div className="buttons">
                                            <div className="main-button">
                                                <a href="#">Request Demo</a>
                                            </div>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-play"></i> What's Online Course?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="icon">
                                    <img src={serviceImage} alt="online degrees" />
                                </div>
                                <div className="main-content">
                                    <h4>Online Degrees</h4>
                                    <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
                                    <div className="main-button">
                                        <a >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="icon">
                                    <img src={serviceImage2} alt="short courses" />
                                </div>
                                <div className="main-content">
                                    <h4>Short Courses</h4>
                                    <p>You can browse free templates based on different tags such as digital marketing, etc.</p>
                                    <div className="main-button">
                                        <a >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="icon">
                                    <img src={serviceImage3} alt="web experts" />
                                </div>
                                <div className="main-content">
                                    <h4>Web Experts</h4>
                                    <p>You can start learning HTML CSS by modifying free templates from our website too.</p>
                                    <div className="main-button">
                                        <a >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-1">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Where shall we begin?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How do we work together?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Why SCHOLAR is the best?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            There are more than one hundred responsive HTML templates to choose from <strong>Template</strong>Mo website. You can browse by different tags or categories.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Do we get the best support?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            You can also search on Google with specific keywords such as <code>templatemo business templates, templatemo gallery templates, admin dashboard templatemo, 3-column templatemo, etc.</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <div className="section-heading">
                                <h6>About Us</h6>
                                <h2>What make us the best academy online?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid risus commodo.</p>
                                <div className="main-button">
                                    <a >Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section courses" id="courses" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Latest Courses</h6>
                                <h2>Latest Courses</h2>
                            </div>
                        </div>
                    </div>
                    <ul className="event_filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Show All</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".design">Webdesign</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".development">Development</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".wordpress">Wordpress</a>
                        </li>
                    </ul>
                    <div className="row event_box">
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course1} alt="" /></a>
                                    <span className="category">Webdesign</span>
                                    <span className="price"><h6><em>$</em>160</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">Stella Blair</span>
                                    <h4>Learn Web Design</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course2} alt="" /></a>
                                    <span className="category">Development</span>
                                    <span className="price"><h6><em>$</em>340</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">Cindy Walker</span>
                                    <h4>Web Development Tips</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course3} alt="" /></a>
                                    <span className="category">Wordpress</span>
                                    <span className="price"><h6><em>$</em>640</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">David Hutson</span>
                                    <h4>Latest Web Trends</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course4} alt="" /></a>
                                    <span className="category">Development</span>
                                    <span className="price"><h6><em>$</em>450</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">Stella Blair</span>
                                    <h4>Online Learning Steps</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course5} alt="" /></a>
                                    <span className="category">Wordpress</span>
                                    <span className="price"><h6><em>$</em>320</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">Sophia Rose</span>
                                    <h4>Be a WordPress Master</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
                            <div className="events_item">
                                <div className="thumb">
                                    <a ><img src={Course6} alt="" /></a>
                                    <span className="category">Webdesign</span>
                                    <span className="price"><h6><em>$</em>240</h6></span>
                                </div>
                                <div className="down-content">
                                    <span className="author">David Hutson</span>
                                    <h4>Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="150" data-speed="1000"></h2>
                                            <p className="count-text ">Happy Students</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="804" data-speed="1000"></h2>
                                            <p className="count-text ">Course Hours</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="50" data-speed="1000"></h2>
                                            <p className="count-text ">Employed Students</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter end">
                                            <h2 className="timer count-title count-number" data-to="15" data-speed="1000"></h2>
                                            <p className="count-text ">Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-member">
                                <div className="main-content">
                                    <a ><img src={Member1} alt="" /></a>
                                    <span className="category">UX Teacher</span>
                                    <h4>Sophia Rose</h4>
                                    <ul className="social-icons">
                                        <li><a ><i className="fab fa-facebook"></i></a></li>
                                        <li><a ><i className="fab fa-twitter"></i></a></li>
                                        <li><a ><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-member">
                                <div className="main-content">
                                    <a ><img src={Member2} alt="" /></a>
                                    <span className="category">Graphic Teacher</span>
                                    <h4>Cindy Walker</h4>
                                    <ul className="social-icons">
                                        <li><a ><i className="fab fa-facebook"></i></a></li>
                                        <li><a ><i className="fab fa-twitter"></i></a></li>
                                        <li><a ><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-member">
                                <div className="main-content">
                                    <a ><img src={Member3} alt="" /></a>
                                    <span className="category">Full Stack Master</span>
                                    <h4>David Hutson</h4>
                                    <ul className="social-icons">
                                        <li><a ><i className="fab fa-facebook"></i></a></li>
                                        <li><a ><i className="fab fa-twitter"></i></a></li>
                                        <li><a ><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-member">
                                <div className="main-content">
                                    <a ><img src={Member4} alt="" /></a>
                                    <span className="category">Digital Animator</span>
                                    <h4>Stella Blair</h4>
                                    <ul className="social-icons">
                                        <li><a ><i className="fab fa-facebook"></i></a></li>
                                        <li><a ><i className="fab fa-twitter"></i></a></li>
                                        <li><a ><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            {/* Replaced Owl Carousel with react-responsive-carousel */}
                            <Carousel
                                showArrows={false}       // Testimonials carousels often don't have arrows
                                showStatus={false}       // Hide "1 of 3" text
                                showThumbs={false}       // Hide thumbnail navigation
                                infiniteLoop={true}
                                autoPlay={true}          // Testimonials often auto-play
                                interval={7000}          // Adjust interval as desired
                                transitionTime={800}
                                showIndicators={true}    // Show pagination dots below testimonials
                                stopOnHover={true}       // Pause auto-play on hover
                                swipeable={true}
                                centerMode={true}        // If you want a "peek" of next/prev testimonials
                                centerSlidePercentage={100} // Ensure full slide is shown, adjust if using centerMode for "peek"
                            // You might want to add custom render for indicators if default doesn't fit
                            >
                                <div className="item">
                                    <p>“Please tell your friends or collegues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”</p>
                                    <div className="author">
                                        {/* Note: In React, <img> tags should be self-closing */}
                                        <img src={Testimonial1} alt="Testimonial Author" />
                                        <span className="category">Full Stack Master</span>
                                        <h4>Claude David</h4>
                                    </div>
                                </div>
                                <div className="item">
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”</p>
                                    <div className="author">
                                        <img src={Testimonial1} alt="Testimonial Author" />
                                        <span className="category">UI Expert</span>
                                        <h4>Thomas Jefferson</h4>
                                    </div>
                                </div>
                                <div className="item">
                                    <p>“Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”</p>
                                    <div className="author">
                                        <img src={Testimonial1} alt="Testimonial Author" />
                                        <span className="category">Digital Animator</span>
                                        <h4>Stella Blair</h4>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <div className="section-heading">
                                <h6>TESTIMONIALS</h6>
                                <h2>What they say about us?</h2>
                                <p>You can search free CSS templates on Google using different keywords such as templatemo portfolio, templatemo gallery, templatemo blue color, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section events" id="events">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Schedule</h6>
                                <h2>Upcoming Events</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="image">
                                            <a ><img src={Event1} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <ul>
                                            <li>
                                                <span className="category">Web Design</span>
                                                <h4>UI Best Practices</h4>
                                            </li>
                                            <li>
                                                <span>Date:</span>
                                                <h6>16 Feb 2036</h6>
                                            </li>
                                            <li>
                                                <span>Duration:</span>
                                                <h6>22 Hours</h6>
                                            </li>
                                            <li>
                                                <span>Price:</span>
                                                <h6>$120</h6>
                                            </li>
                                        </ul>
                                        <a ><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="image">
                                            <a ><img src={Event2} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <ul>
                                            <li>
                                                <span className="category">Front End</span>
                                                <h4>New Design Trend</h4>
                                            </li>
                                            <li>
                                                <span>Date:</span>
                                                <h6>24 Feb 2036</h6>
                                            </li>
                                            <li>
                                                <span>Duration:</span>
                                                <h6>30 Hours</h6>
                                            </li>
                                            <li>
                                                <span>Price:</span>
                                                <h6>$320</h6>
                                            </li>
                                        </ul>
                                        <a ><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="image">
                                            <a ><img src={Event3} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <ul>
                                            <li>
                                                <span className="category">Full Stack</span>
                                                <h4>Web Programming</h4>
                                            </li>
                                            <li>
                                                <span>Date:</span>
                                                <h6>12 Mar 2036</h6>
                                            </li>
                                            <li>
                                                <span>Duration:</span>
                                                <h6>48 Hours</h6>
                                            </li>
                                            <li>
                                                <span>Price:</span>
                                                <h6>$440</h6>
                                            </li>
                                        </ul>
                                        <a ><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-us section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6  align-self-center">
                            <div className="section-heading">
                                <h6>Contact Us</h6>
                                <h2>Feel free to contact us anytime</h2>
                                <p>Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.</p>
                                <div className="special-offer">
                                    <span className="offer">off<br /><em>50%</em></span>
                                    <h6>Valide: <em>24 April 2036</em></h6>
                                    <h4>Special Offer <em>50%</em> OFF!</h4>
                                    <a ><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-us-content">
                                <form id="contact-form" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <input type="name" name="name" id="name" placeholder="Your Name..." autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                                            </fieldset>
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
                    <div className="col-lg-12">
                        <p>Copyright © 2025. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
