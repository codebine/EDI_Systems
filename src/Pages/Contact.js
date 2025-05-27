/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css'
import "../css/services.css";
import '../css/about.css'
import '../css/owl.css'
import '../css/animate.css'
import '../css/flex-slider.css'

const Contact = () => {
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
                  <li className="scroll-to-section"><a><NavLink to="/Services" >Services</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/Technologies">Technologies</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/Consulting" >Consulting</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/Products">Products</NavLink></a></li>
                  <li className="scroll-to-section"><a><NavLink to="/Contact" className="active">Contact</NavLink></a></li>
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
                <h1>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="contact" className="contact section my-5" style={{ marginTop: "120px !important" }}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <iframe
              style={{ border: 0, width: "100%", height: "500px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
                <p>Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.</p>

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



      {/* Contact  */}
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

export default Contact
