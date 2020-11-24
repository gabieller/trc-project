import React from "react"
// import SideMenu from "./SideMenu"
import { Link } from "gatsby"

import "../styles/header.css"

import trclogo from "../images/trc-logo-black.png"
// import menu from "../images/menu-btn.svg"

export default function Header({ uri }) {
  return (
    <>
      <nav
        id="mainNavbar"
        className="navbar navbar-expand-lg fixed-top navbar-transparent bg-transparent"
      >
          <div className="container">
          <a className="navbar-brand logo">
            <img alt="" src={trclogo} width="305" height="144" alt="" />
          </a>
        <div className="menuLink">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${uri === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${uri === "/about" ? "active" : ""}`}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className={`nav-item ${uri === "/pingo" ? "active" : ""}`}>
              <Link to="/pingo" className="nav-link">
                Pingo
              </Link>
            </li>
            <li className={`nav-item ${uri === "/product" ? "active" : ""}`}>
              <Link to="/product" className="nav-link">
                Product
              </Link>
            </li>
            <li className={`nav-item ${uri === "/contact" ? "active" : ""}`}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}



   {/* <div id="navbarResponsive" className={`collapse navbar-collapse`}>
          <button
            id="open-menu-btn"
            className="btn btn-link"
          >
            <img src={menu} width="36" height="24" alt="" />
          </button>
        </div> */}
