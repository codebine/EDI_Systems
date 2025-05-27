/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css'
import '../css/owl.css'
import '../css/animate.css'
import '../css/flex-slider.css'

const Products = () => {
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
                  <li className="scroll-to-section"><a><NavLink to="/Products" className="active">Products</NavLink></a></li>
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
                <h1>Products</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
