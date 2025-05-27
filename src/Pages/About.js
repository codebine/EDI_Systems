/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css'
import '../css/about.css'
import '../css/owl.css'
import '../css/animate.css'
import '../css/flex-slider.css'

import bg_2 from "../images/valuable-skill.jpg";
import bg_3 from "../images/play-video.jpg";

const About = () => {
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
                                    <li className="scroll-to-section"><a><NavLink to="/">Home</NavLink></a></li>
                                    <li className="scroll-to-section"><a><NavLink to="/About"className="active">About</NavLink></a></li>
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
                            <div className="breadcrumb-wrapper">
                                <h1>About</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Head  */}
            <section className="about-area sec-mar">
                <div className="container">
                    <div className="out-story">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6">
                                <div className="story-left mt-5">
                                    <div className="office-group-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Office Group Image"
                                        />
                                        <div className="cto-message-wrapper">
                                            <div className="cto-message">
                                                <p>
                                                    Integer purus odio, placerat nec lessi rhoncus in,
                                                    ullamcorper nec dolor. Class aptent taciti sociosqu.
                                                </p>
                                                <h4>
                                                    Carlo Rabil.
                                                    <span>CTO &amp; FOUNDER, Finibus</span>
                                                </h4>
                                                <img
                                                    src="/images/cto-signature.png"
                                                    alt="CTO Signature"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xl-6">
                                <div className="story-right">
                                    <div className="title black">
                                        <span>Inside Story</span>
                                        <h2 className="mb-15">
                                            We are a creative agency that creates beautiful
                                            experiences.
                                        </h2>
                                    </div>
                                    <p>
                                        Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                                        dolor. Class aptent taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos himenaeos. Praesent nec neque
                                        at dolor venenatis consectetur eu quis est. Donec lacinia
                                        placerat felis non aliquam.
                                    </p>
                                    <div className="story-skills">
                                        <div className="story-skill">
                                            <svg
                                                className="CircularProgressbar progress-bar-circle"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    className="CircularProgressbar-trail"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                ></path>
                                                <path
                                                    className="CircularProgressbar-path"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                    style={{
                                                        strokeDasharray: "311.018",
                                                        strokeDashoffset: "31.1018",
                                                    }}
                                                ></path>
                                                <text
                                                    className="CircularProgressbar-text"
                                                    x="50"
                                                    y="50"
                                                >
                                                    90%
                                                </text>
                                            </svg>
                                            <span>Idea &amp; Research</span>
                                        </div>

                                        <div className="story-skill">
                                            <svg
                                                className="CircularProgressbar progress-bar-circle"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    className="CircularProgressbar-trail"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                ></path>
                                                <path
                                                    className="CircularProgressbar-path"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                    style={{
                                                        strokeDasharray: "311.018",
                                                        strokeDashoffset: "15.5509",
                                                    }}
                                                ></path>
                                                <text
                                                    className="CircularProgressbar-text"
                                                    x="50"
                                                    y="50"
                                                >
                                                    95%
                                                </text>
                                            </svg>
                                            <span>Wireframe &amp; Design</span>
                                        </div>

                                        <div className="story-skill">
                                            <svg
                                                className="CircularProgressbar progress-bar-circle"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    className="CircularProgressbar-trail"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                ></path>
                                                <path
                                                    className="CircularProgressbar-path"
                                                    d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                                                    stroke-width="1"
                                                    fill-opacity="0"
                                                    style={{
                                                        strokeDasharray: "311.018",
                                                        strokeDashoffset: "37.3221",
                                                    }}
                                                ></path>
                                                <text
                                                    className="CircularProgressbar-text"
                                                    x="50"
                                                    y="50"
                                                >
                                                    88%
                                                </text>
                                            </svg>
                                            <span>Developing &amp; Launch</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About  */}
            <section class="about-area sec-mar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-xl-6">
                            <div class="about-left">
                                <div class="title black">
                                    <span>About Us</span>
                                    <h2 class="mb-15">Direction with our company.</h2>
                                </div>
                                <p>
                                    Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                                    dolor. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos. Praesent nec neque at
                                    dolor venenatis consectetur eu quis est. Donec lacinia
                                    placerat felis non aliquam. Integer purus odio.
                                </p>
                                {/* <div class="our-mission">
                  <div class="msn-icon">
                    <img src={icon} alt="Mission Icon" />
                  </div>
                  <div class="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                      Integer purus odio, placerat nec rhoni olor. Class online
                      and video.
                    </p>
                  </div>
                </div> */}
                                <div class="cmn-btn">
                                    <a href="/about">About More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-6">
                            <div class="about-right">
                                <div class="group-images">
                                    <img
                                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="About Bottom Image"
                                    />
                                    <div class="about-top">
                                        <img
                                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="About Top Image"
                                        />
                                    </div>
                                    <div class="about-skills">
                                        <div class="signle-skill">
                                            <svg
                                                class="CircularProgressbar progress-bar-circle"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    class="CircularProgressbar-trail"
                                                    d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                                                    stroke-width="8"
                                                    fill-opacity="0"
                                                ></path>
                                                <path
                                                    class="CircularProgressbar-path"
                                                    d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                                                    stroke-width="8"
                                                    fill-opacity="0"
                                                    style={{
                                                        strokeDasharray: "289.027",
                                                        strokeDashoffset: "43.354",
                                                    }}
                                                ></path>
                                                <text class="CircularProgressbar-text" x="50" y="50">
                                                    85%
                                                </text>
                                            </svg>
                                            <div class="skill-content">
                                                <h6>Web</h6>
                                                <p>Clean Design</p>
                                            </div>
                                        </div>

                                        <div class="signle-skill xsm">
                                            <svg
                                                class="CircularProgressbar progress-bar-circle"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    class="CircularProgressbar-trail"
                                                    d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                                                    stroke-width="8"
                                                    fill-opacity="0"
                                                ></path>
                                                <path
                                                    class="CircularProgressbar-path"
                                                    d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                                                    stroke-width="8"
                                                    fill-opacity="0"
                                                    style={{
                                                        strokeDasharray: "289.027",
                                                        strokeDashoffset: "92.4885",
                                                    }}
                                                ></path>
                                                <text class="CircularProgressbar-text" x="50" y="50">
                                                    68%
                                                </text>
                                            </svg>
                                            <div class="skill-content">
                                                <h6>App</h6>
                                                <p>Developing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About  */}
            {/* why choose  */}
            <section class="why-choose-us sec-mar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-xl-6">
                            <div class="title black">
                                <span>Why Choose Us</span>
                                <h2 class="mb-15">
                                    Success is just around the next online corner
                                </h2>
                            </div>
                            <div class="video-demo">
                                <img src={bg_3} alt="Play Video" />
                                <div class="play-btn">
                                    <div class="popup-video">
                                        <i class="fas fa-play"></i> Play now
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-6 col-xl-6">
                            <div class="valuable-skills">
                                <img src={bg_2} alt="Valuable Skills" />
                                <div class="single-bar pt-0">
                                    <h6>Web Design</h6>
                                    <div class="progress-bar">
                                        <div class="progress" style={{ width: "85%" }}></div>
                                        <span>85%</span>
                                    </div>
                                </div>
                                <div class="single-bar">
                                    <h6>App Development</h6>
                                    <div class="progress-bar">
                                        <div class="progress" style={{ width: "75%" }}></div>
                                        <span>75%</span>
                                    </div>
                                </div>
                                <div class="single-bar">
                                    <h6>Backend</h6>
                                    <div class="progress-bar">
                                        <div class="progress" style={{ width: "55%" }}></div>
                                        <span>55%</span>
                                    </div>
                                </div>
                                <div class="single-bar">
                                    <h6>Video Animation</h6>
                                    <div class="progress-bar">
                                        <div class="progress" style={{ width: "65%" }}></div>
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* why choose  */}
            {/* call to action  */}
            <section class="lets-talk sec-pad">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-8 col-xl-7">
                            <div class="title special">
                                <span>Let’s Talk</span>
                                <h2>
                                    About Your Next <br />
                                    <b>Project</b> On Your Mind
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 col-xl-5 text-end">
                            <div class="getin-touch">
                                <div class="cmn-btn">
                                    <a href="/contact">Get In Touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* call to action  */}
        </div>
    )
}

export default About
