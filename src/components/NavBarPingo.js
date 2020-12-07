import React from "react"

import "../styles/navbar-pingo.css"

export default function NavBar() {
  return (
    <nav
      id="navbar-pingo"
      className="navbar col-md-12 justify-content-center"
    >
      <ul className="nav nav-pill">
        <li className="nav-item px-4">
          <a className="nav-link font-weight-bold" href="#pingo-content">
            ABOUT
          </a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link font-weight-bold" href="#pingo-about">
            WHO BUILD
          </a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link font-weight-bold" href="#pingo-content">
            WHERE YOU FIND
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#pingo-content">
            GET PINGO
          </a>
        </li>
      </ul>
    </nav>
  )
}
