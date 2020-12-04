import React, { useState } from "react"
import SideMenu from "./SideMenu"

import "../styles/header-pingo.css"

import menu from "../images/menu-btn.svg"

export default function Header({ uri, onOpen }) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)

  const onClickMenuButton = () => {
    onOpen(!isOpenSidebar)
    setOpenSidebar(!isOpenSidebar)
  }

  return (
    <>
      <SideMenu visible={isOpenSidebar} uri={uri} onClick={onClickMenuButton} />

      <nav
        id="navbar-hamburguer"
        className={`navbar fixed-top bg-transparent d-flex flex-row-reverse`}
      >
        <button
          className="btn btn-link navbar-toggler"
          onClick={onClickMenuButton}
        >
          <img src={menu} alt="hamburger menu" width="36" height="24" />
        </button>
      </nav>

      <nav
        id="navbar-pingo"
        className="navbar bg-transparent justify-content-center"
      >
        <ul className="nav nav-pills">
          <li className="nav-item  px-4">
            <a className="nav-link" href="#pingo-content">
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
    </>
  )
}
