/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useEffect }from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css'
import "../css/services.css";
import '../css/owl.css'
import '../css/animate.css'
import '../css/flex-slider.css'

import step_1 from "../images/step-1.png"
import step_2 from "../images/step-2.jpg"
import step_3 from "../images/step-3.jpg"
import img1 from "../images/illustration1.svg"
import img2 from "../images/illustration2.svg"
import img3 from "../images/illustration3.svg"
import Course1 from '../images/course-01.jpg';
import Course2 from '../images/course-02.jpg';
import Course3 from '../images/course-03.jpg';
import Course4 from '../images/course-04.jpg';
import Course5 from '../images/course-05.jpg';
import Course6 from '../images/course-06.jpg';

const Services = () => {
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
                  <li className="scroll-to-section"><a><NavLink to="/" >Home</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/About">About</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/Services" className="active">Services</NavLink></a></li>
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
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Head  */}
      {/* Services  */}
      <div class="section optech-section-padding5">
        <div class="container">
          <div class="optech-section-title center">
            <h2>Our working process on how to grow your business</h2>
          </div>
          <div class="row z-index">
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Initiation and Planning Icon" width="228" height="220" decoding="async" src={img1} />
                </div>
                <div class="optech-numberbox-data">
                  <span>01</span>
                  <h4>Initiation &amp; Planning</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Execution and Development Icon" width="228" height="220" decoding="async" src={img2} />
                </div>
                <div class="optech-numberbox-data">
                  <span>02</span>
                  <h4>Execution &amp; Development</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="900">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Testing and Maintenance Icon" width="228" height="220" decoding="async" src={img3} />
                </div>
                <div class="optech-numberbox-data">
                  <span>03</span>
                  <h4>Testing &amp; Maintenance</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Services  */}
        {/* procedure */}
        <section class="service-details sec-mar">
          <div class="container">
            <div class="single-service-work-process">
              <h3>How We Work in Our Services</h3>
              <div class="single-step">
                <div class="row">
                  <div class="col-md-8 col-xl-8 or2">
                    <div class="step">
                      <div class="step-count">
                        <span>01</span>
                      </div>
                      <h4>Wireframe &amp; Design</h4>
                      <p>
                        In euismod lacinia rhoncus. Morbi ornare, lectus quis
                        mattis finibus, metus sapien venenatis orci, eget lacinia
                        magna justo vehiculametus. Morbi sit amet erat faucibus,
                        sagittis libero sed, condimentum tortor. Aenean ac nunc
                        dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-xl-4 or1">
                    <div class="step-img">
                      <img src={step_1} alt="Step 1" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-step">
                <div class="row">
                  <div class="col-md-4 col-xl-4">
                    <div class="step-img">
                      <img src={step_2} alt="Step 2" />
                    </div>
                  </div>
                  <div class="col-md-8 col-xl-8">
                    <div class="step">
                      <div class="step-count">
                        <span>02</span>
                      </div>
                      <h4>Developing</h4>
                      <p>
                        In euismod lacinia rhoncus. Morbi ornare, lectus quis
                        mattis finibus, metus sapien venenatis orci, eget lacinia
                        magna justo vehiculametus. Morbi sit amet erat faucibus,
                        sagittis libero sed, condimentum tortor. Aenean ac nunc
                        dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-step">
                <div class="row">
                  <div class="col-md-8 col-xl-8 or2">
                    <div class="step">
                      <div class="step-count">
                        <span>03</span>
                      </div>
                      <h4>Checkup &amp; Launch</h4>
                      <p>
                        In euismod lacinia rhoncus. Morbi ornare, lectus quis
                        mattis finibus, metus sapien venenatis orci, eget lacinia
                        magna justo vehiculametus. Morbi sit amet erat faucibus,
                        sagittis libero sed, condimentum tortor. Aenean ac nunc
                        dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-xl-4 or1">
                    <div class="step-img">
                      <img src={step_3} alt="Step 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* procedure */}
        {/* services */}
        <section className="section courses" id="courses" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-heading">
                  <h2>Services</h2>
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
        {/* services */}

      </div>
    </div>
  )
}

export default Services
