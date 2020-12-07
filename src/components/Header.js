import React, { useState, useEffect, useCallback } from "react"
import SideMenu from "./SideMenu"
import { HamburgerCollapse } from "react-animated-burgers"

import "../styles/header.css"

import trclogo from "../images/trc-logo-black.png"
// import menu from "../images/menu-btn.svg"

export default function Header({ uri, onOpen }) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [visibilityClass, setVisibilityClass] = useState("")
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    []
  )

  const handleScroll = () => {
    if (window.pageYOffset > 45) {
      setVisibilityClass("bg-transparent navbar-scrolled")
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

  return (
    <>
      <SideMenu visible={isOpenSidebar} uri={uri} onClick={onClickMenuButton} />
      <nav className={`navbar fixed-top ${visibilityClass}`}>
        <a href="/" className="navbar-brand">
          <img src={trclogo} alt="Main logo" className="img-fluid" />
        </a>
        <HamburgerCollapse
          className="btn btn-link navbar-toggler"
          isActive={isActive}
          toggleButton={toggleButton}
          barColor="black"
          onClick={onClickMenuButton}
        />
        {/* <button
          className="btn btn-link navbar-toggler"
          onClick={onClickMenuButton}
        >
          <img src={menu} alt="hamburger menu" width="36" height="24" />
        </button> */}
      </nav>
    </>
  )
}
