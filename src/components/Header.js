import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import { HamburgerCollapse } from "react-animated-burgers"
import SideMenu from "./SideMenu"
import { useEffectOnlyOnce } from "../utils/hooks"
import "../styles/header.css"
import trclogo from "../images/trc-logo-black.png"

export default function Header({ uri }) {
  const [state, setState] = useState({
    visibilityClass: "",
    isSidebarOpen: false,
  })

  const toggleButton = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isSidebarOpen: !prevState.isSidebarOpen,
    }))
  }, [])

  useEffectOnlyOnce(() => {
    const handleScroll = () => {
      setState(prevState => ({
        ...prevState,
        visibilityClass:
          window.pageYOffset > 50 ? "bg-white navbar-scrolled" : "",
      }))
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <nav className={`navbar fixed-top  ${state.visibilityClass}`}>
        <Link to="/" className="navbar-brand py-3 px-5 p-xxl-5">
          <img
            src={trclogo}
            alt="Main logo"
            className="img-fluid"
            width="250"
            height="55"
          />
        </Link>
        <div className="d-flex flex-row-reverse col-md-7">
          <Button className="btn-black btn-action" variant="contained">
            GET STARTED
          </Button>
        </div>

        <HamburgerCollapse
          className="collapse-button"
          isActive={state.isSidebarOpen}
          barColor="black"
          onClick={toggleButton}
        />
      </nav>

      <HamburgerCollapse
        className="fixed-top collapse-button"
        isActive={state.isSidebarOpen}
        barColor={state.isSidebarOpen ? "white" : "transparent"}
        onClick={toggleButton}
      />

      <SideMenu
        visible={state.isSidebarOpen}
        uri={uri}
        onClick={toggleButton}
      />
    </>
  )
}
