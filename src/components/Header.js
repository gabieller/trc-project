import React, { useState, useEffect } from "react"
import SideMenu from "./SideMenu"

import "../styles/header.css"

import trclogo from "../images/trc-logo-black.png"
import menu from "../images/menu-btn.svg"

export default function Header({ uri, onOpen }) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [visibilityClass, setVisibilityClass] = useState(
    "navbar-transparent bg-transparent"
  )

  const handleScroll = e => {
    if (window.pageYOffset > 45) {
      setVisibilityClass("navbar-shrink")
    } else {
      setVisibilityClass("")
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

  if (visibilityClass === "navbar-shrink") {
    return (
      <>
        <SideMenu
          visible={isOpenSidebar}
          uri={uri}
          onClick={onClickMenuButton}
        />
        <button
          id="open-menu-button"
          className={`btn btn-link`}
          onClick={onClickMenuButton}
        >
          <img alt="close menu" src={menu} width="36" height="24" />
        </button>
      </>
    )
  }

  return (
    <>
      <SideMenu visible={isOpenSidebar} uri={uri} onClick={onClickMenuButton} />

      <nav
        id="mainNavbar"
        className={`navbar fixed-top navbar-transparent bg-transparent ${visibilityClass}`}
      >
        {/* <div className="container"> */}
          <a href="/" className="navbar-brand logo ">
            <img src={trclogo} alt="Main logo" width="470" height="100" className="img-fluid" />
          </a>
          <button
            id="open-menu-button"
            className={`btn btn-link`}
            onClick={onClickMenuButton}
          >
            <img src={menu} alt="hamburger menu" width="36" height="24" />
          </button>
        {/* </div> */}
      </nav>
    </>
  )
}
