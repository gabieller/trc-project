import React, { useState, useEffect } from "react"
import SideMenu from "./SideMenu"

import "../styles/header.css"

import trclogo from "../images/trc-logo-black.png"
import menu from "../images/menu-btn.svg"

export default function Header({ uri, onOpen }) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [visibilityClass, setVisibilityClass] = useState("bg-light")

  const handleScroll = () => {
    if (window.pageYOffset > 45) {
      setVisibilityClass("bg-transparent navbar-scrolled")
    } else {
      setVisibilityClass("bg-light")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const onClickMenuButton = () => {
    onOpen(!isOpenSidebar)
    setOpenSidebar(!isOpenSidebar)
  }

  return (
    <>
      <SideMenu visible={isOpenSidebar} uri={uri} onClick={onClickMenuButton} />
      <div className="container">
        <nav className={`navbar fixed-top ${visibilityClass}`}>
          <a href="/" className="navbar-brand">
            <img src={trclogo} alt="Main logo" className="img-fluid" />
          </a>
          <button
            className="btn btn-link navbar-toggler"
            onClick={onClickMenuButton}
          >
            <img src={menu} alt="hamburger menu" width="36" height="24" />
          </button>
        </nav>
      </div>
    </>
  )
}
