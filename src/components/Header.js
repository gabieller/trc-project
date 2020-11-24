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
    if (window.pageYOffset > 86) {
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
          <img alt="" src={menu} width="30" height="30" />
        </button>
      </>
    )
  }

  return (
    <>
      <SideMenu visible={isOpenSidebar} uri={uri} onClick={onClickMenuButton} />

      <nav
        id="mainNavbar"
        className={`navbar navbar-expand-lg fixed-top navbar-transparent bg-transparent ${visibilityClass}`}
      >
        <div className="container">
          <a className="navbar-brand logo">
            <img alt="" src={trclogo} width="305" height="144" alt="" />
          </a>
          <button 
            id="open-menu-button" 
            className={`btn btn-link`}
            onClick={onClickMenuButton}
            >
            <img alt="" src={menu} width="30" height="30" />
          </button>
        </div>
      </nav>
    </>
  )
}
