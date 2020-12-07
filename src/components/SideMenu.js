import React from "react"
import { Link } from "gatsby"

import "../styles/sidemenu.css"

// import close from "../images/close-btn.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

export default function SideMenu({ onClick, uri, visible }) {
  return (
    <>
      <div id="overlay" className={visible ? "open" : ""}>
        <div className={`sidebar ${visible ? "open" : ""}`}>
          {/* <button
            id="close-sidebar-button"
            className={`btn btn-link`}
            onClick={onClick}
          >
            <img src={close} alt="Close button" width="30" height="30" />
          </button> */}
          <div className="row container">
            <div className="col-md-6 menuLink">
              <div id="side-menu" className="menuLink col-md-6">
                <ul className="navbar-nav ml-auto font-weight-bold">
                  <li className={`nav-item ${uri === "/" ? "active" : ""}`}>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/about" ? "active" : ""}`}
                  >
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/pingo" ? "active" : ""}`}
                  >
                    <Link to="/pingo" className="nav-link">
                      Pingo
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/product" ? "active" : ""}`}
                  >
                    <Link to="/solutions" className="nav-link">
                      Solutions
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/contact" ? "active" : ""}`}
                  >
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 contact">
              <div className="col-md-6 pt-3 email-link">
                <a href="mailto:info@theroutingcompany.com?subject=Press%20%26%20interviews">
                  info@theroutingcompany.com
                </a>
              </div>
              <div className="col-md-6 pt-3 pl-0 social-media">
                <button className={`btn btn-link`}>
                  <img
                    src={linkedin}
                    alt="Linkedin button"
                    width="20"
                    height="20"
                  />
                </button>
                <button className={`btn btn-link`}>
                  <img
                    src={twitter}
                    alt="Twitter button"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
