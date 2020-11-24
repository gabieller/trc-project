import React from "react"
import { Link } from "gatsby"

import "../styles/sidemenu.css"

// import close from "../images/close-btn.svg"

export default function SideMenu({ onClick, uri, visible }) {
  return (
    <>
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
        </ul>
      </div>

      {/* <div id="overlay" className={visible ? "open" : ""}>
        <div className={`sidebar ${visible ? "open" : ""}`}>
          <button
            id="close-sidebar-button"
            className={`btn btn-link`}
            onClick={onClick}
          >
            <img alt="" src={close} alt="" width="30" height="30" />
          </button>
        </div>
      </div> */}
    </>
  )
}
