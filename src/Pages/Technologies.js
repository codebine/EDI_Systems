/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/Tech.css";
import "../css/owl.css";
import "../css/animate.css";
import "../css/flex-slider.css";

import thumb1 from "../images/thumb1.png";
import thumb2 from "../images/thumb2.png";
import shape1 from "../images/shape1.svg";
import shape2 from "../images/shape2.svg";
import client1 from "../images/clients/client-1.png";
import client2 from "../images/clients/client-2.png";
import client3 from "../images/clients/client-3.png";
import client4 from "../images/clients/client-4.png";
import client5 from "../images/clients/client-5.png";
import client6 from "../images/clients/client-6.png";
import client7 from "../images/clients/client-7.png";
import client8 from "../images/clients/client-8.png";

const Technologies = () => {
  useEffect(() => {
    const filterLinks = document.querySelectorAll(".event_filter a");
    const courseBoxes = document.querySelectorAll(".event_box .event_outer");

    filterLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all
        filterLinks.forEach((l) => l.classList.remove("is_active"));
        link.classList.add("is_active");

        const filter = link.getAttribute("data-filter");

        courseBoxes.forEach((box) => {
          if (filter === "*") {
            box.style.display = "block";
          } else if (box.classList.contains(filter.substring(1))) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      });
    });

    // Cleanup listeners on unmount
    return () => {
      filterLinks.forEach((link) => {
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
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/">Home</NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/About">About</NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/Services">Services</NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/Technologies" className="active">
                        Technologies
                      </NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/Consulting">Consulting</NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/Products">Products</NavLink>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a>
                      <NavLink to="/Contact">Contact</NavLink>
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
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
                <h1>Technologies</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section large-padding-tb overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="optech-thumb extra-mr">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  alt="Main IT Solutions Thumbnail"
                  class="h-auto w-100 aos-init aos-animate"
                  sizes="100vw"
                  decoding="async"
                  src={thumb1}
                />
                <div
                  class="optech-thumb-position aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img
                    alt="Additional IT Solutions Thumbnail"
                    class="h-auto w-100"
                    decoding="async"
                    src={thumb2}
                  />
                </div>
                <div class="optech-shape1">
                  <img
                    alt="Decorative Shape 1"
                    width="133"
                    height="200"
                    decoding="async"
                    src={shape1}
                  />
                </div>
                <div class="optech-shape2">
                  <img
                    alt="Decorative Shape 2"
                    width="104"
                    height="107"
                    decoding="async"
                    src={shape2}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end">
              <div class="optech-default-content ml40">
                <h2>More than 25+ years we provide IT solutions</h2>
                <h5>
                  During this time, we’ve built a reputation for excellent
                  client satisfaction as evidenced by our achievements.
                </h5>
                <p>
                  Each demo built with Teba will look unique. You can customize
                  almost any aspect of your website's appearance with just a few
                  clicks. Each demo built with Teba will offer a different
                  design.
                </p>
                <div class="optech-extra-mt">
                  <a
                    class="optech-default-btn"
                    data-text="More About Us"
                    href="/about-us"
                  >
                    <span class="btn-wraper">More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Our Services</h6>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".design">
                Webdesign
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".development">
                Development
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".wordpress">
                Wordpress
              </a>
            </li>
          </ul>
          <div className="row event_box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
              <div className="events_item">
                <div class="optech-iconbox-wrap">
                  <div class="optech-iconbox-icon">
                    <i class="fa fa-grav" aria-hidden="true"></i>
                  </div>
                  <div class="optech-iconbox-data">
                    <h5>
                      Data Tracking <br /> Security
                    </h5>
                    <p>Developing a comprehensive IT strategy that aligns.</p>
                    <a class="optech-icon-btn" href="/service-details">
                      <i class="icon-show ri-arrow-right-line"></i>
                      <span>Learn More</span>
                      <i class="icon-hide ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item"></div>
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>
                </div>
                <div class="optech-iconbox-data">
                  <h5>
                    Data Tracking <br /> Security
                  </h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
              <div className="events_item">
                <div class="optech-iconbox-wrap">
                  <div class="optech-iconbox-icon">
                    <i class="fa fa-grav" aria-hidden="true"></i>
                  </div>
                  <div class="optech-iconbox-data">
                    <h5>
                      Data Tracking <br /> Security
                    </h5>
                    <p>Developing a comprehensive IT strategy that aligns.</p>
                    <a class="optech-icon-btn" href="/service-details">
                      <i class="icon-show ri-arrow-right-line"></i>
                      <span>Learn More</span>
                      <i class="icon-hide ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
              <div className="events_item">
                <div class="optech-iconbox-wrap">
                  <div class="optech-iconbox-icon">
                    <i class="fa fa-grav" aria-hidden="true"></i>
                  </div>
                  <div class="optech-iconbox-data">
                    <h5>
                      Data Tracking <br /> Security
                    </h5>
                    <p>Developing a comprehensive IT strategy that aligns.</p>
                    <a class="optech-icon-btn" href="/service-details">
                      <i class="icon-show ri-arrow-right-line"></i>
                      <span>Learn More</span>
                      <i class="icon-hide ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
              <div className="events_item">
                <div class="optech-iconbox-wrap">
                  <div class="optech-iconbox-icon">
                    <i class="fa fa-grav" aria-hidden="true"></i>
                  </div>
                  <div class="optech-iconbox-data">
                    <h5>
                      Data Tracking <br /> Security
                    </h5>
                    <p>Developing a comprehensive IT strategy that aligns.</p>
                    <a class="optech-icon-btn" href="/service-details">
                      <i class="icon-show ri-arrow-right-line"></i>
                      <span>Learn More</span>
                      <i class="icon-hide ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
              <div className="events_item">
                <div class="optech-iconbox-wrap">
                  <div class="optech-iconbox-icon">
                    <i class="fa fa-grav" aria-hidden="true"></i>
                  </div>
                  <div class="optech-iconbox-data">
                    <h5>
                      Data Tracking <br /> Security
                    </h5>
                    <p>Developing a comprehensive IT strategy that aligns.</p>
                    <a class="optech-icon-btn" href="/service-details">
                      <i class="icon-show ri-arrow-right-line"></i>
                      <span>Learn More</span>
                      <i class="icon-hide ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" class="clients">
        <div class="container" data-aos="zoom-in">
          <div class="clients-slider swiper">
            <div class="swiper-wrapper align-items-center">
              <div class="swiper-slide">
                <img src={client1} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client2} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client3} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client4} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client5} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client6} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client7} class="img-fluid" alt="" />
              </div>
              <div class="swiper-slide">
                <img src={client8} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>Feel free to contact us anytime</h2>
                <p>
                  Thank you for choosing our templates. We provide you best CSS
                  templates at absolutely 100% free of charge. You may support
                  us by sharing our website to your friends.
                </p>
                <div className="special-offer">
                  <span className="offer">
                    off
                    <br />
                    <em>50%</em>
                  </span>
                  <h6>
                    Valide: <em>24 April 2036</em>
                  </h6>
                  <h4>
                    Special Offer <em>50%</em> OFF!
                  </h4>
                  <a>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autocomplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="orange-button"
                        >
                          Send Message Now
                        </button>
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
  );
};

export default Technologies;
