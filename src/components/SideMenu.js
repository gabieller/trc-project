import React from "react"
import { Link } from "gatsby"

import "../styles/sidemenu.css"

import trclogowhite from "../images/trclogo-white.png"
import pingosidemenu from "../images/pingo-sidemenu.png"
import linkedin from "../images/linkedin.svg"
import medium from "../images/medium.png"
import twitter from "../images/twitter.svg"
import arrowright from "../images/arrow-right-white.svg"

export default function SideMenu({ onClick, uri, visible }) {
  return (
    <>
      <div id="overlay" className={visible ? "open" : ""}>
        <div className={`sidebar ${visible ? "open" : ""}`}>
          <div className="d-flex flex-column">
            <div>
              <img
                src={trclogowhite}
                alt="Main logo"
                className="img-fluid pl-2 pt-3"
                width="470"
                height="65"
              />
            </div>
            <div className="col-md-6 menu">
              <div id="side-menu" className="col-md-6 menuLink pt-5">
                <ul className="navbar-nav ml-auto fw-bold">
                  <li className={`nav-item ${uri === "/" ? "active" : ""}`}>
                    <Link to="/" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pr-2">01</span>Home
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/about" ? "active" : ""}`}
                  >
                    <Link to="/about" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pr-2">02</span>About
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      uri === "/solutions" ? "active" : ""
                    }`}
                  >
                    <Link to="/solutions" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pr-2">03</span>Solutions
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/contact" ? "active" : ""}`}
                  >
                    <Link to="/contact" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pr-2">04</span>Contact
                      </h1>
                    </Link>
                  </li>
                  <li className={`nav-item ${uri === "/blog" ? "active" : ""}`}>
                    <Link to="/blog" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pr-2">05</span>Blog
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/contact" ? "active" : ""}`}
                  >
                    <Link to="/pingo" className="nav-link d-inline-flex">
                      <img
                        src={pingosidemenu}
                        className="pingo-link"
                        alt="Go to Pingo"
                        width="155"
                        height="45"
                      />
                      <img
                        className="pt-2 arrow-pingo"
                        src={arrowright}
                        alt="Go to Pingo"
                        width="50"
                        height="50"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mdh5 contact">
            <div className="d-flex flex-row-reverse col-md-6 pt-3 pl-0 social-media">
              <button className={`btn btn-link p-2`}>
                <img
                  src={linkedin}
                  alt="Linkedin button"
                  width="24"
                  height="24"
                />
              </button>
              <button className={`btn btn-link p-2`}>
                <img
                  src={twitter}
                  alt="Twitter button"
                  width="30"
                  height="24"
                />
              </button>
              <button className={`btn btn-link p-0`}>
                <img src={medium} alt="Medium button" width="50" height="30" />
              </button>
            </div>
            <div className=" d-flex flex-row-reverse col-md-6 pt-3 px-2 email-link">
              <a href="mailto:info@theroutingcompany.com?subject=Infomations">
                info@theroutingcompany.com
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
