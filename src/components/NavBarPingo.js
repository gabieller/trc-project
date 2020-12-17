import React from "react"

import "../styles/navbar-pingo.css"

export default function NavBar() {
  return (
    <nav id="navbar-pingo" className="navbar col-md-12 justify-content-center">
      <ul nav nav-pill>
        <li className="one nav-item px-5">
          <a className="item font-weight-bold" href="#pingo-content">
            ABOUT
          </a>
        </li>
        <li className="two nav-item px-5">
          <a className="item font-weight-bold" href="#pingo-about">
            WHO BUILD
          </a>
        </li>
        <li className="three nav-item px-5">
          <a className="item font-weight-bold" href="#pingo-content">
            WHERE YOU FIND
          </a>
        </li>
        <li className="four nav-item px-5">
          <a className="item font-weight-bold" href="#pingo-content">
            GET PINGO
          </a>
        </li>
        <hr />
      </ul>
    </nav>
  )
}
