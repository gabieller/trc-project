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
  const pathname = window.location.pathname

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
          window.pageYOffset > 60 ? "bg-white navbar-scrolled" : "",
      }))
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <nav
        className={`navbar fixed-top col-11 col-md-12   ${state.visibilityClass}`}
      >
        <Link to="/" className="navbar-brand py-3 px-md-5 p-xxl-5 ms-md-4">
          <img
            src={trclogo}
            alt="Main logo"
            className="ps-md-3 ps-4 logo-header"
          />
        </Link>
        {pathname !== "/" && (
          <div className="col-md-6 d-none d-md-block d-lg-block">
            <div className="d-flex flex-row-reverse ">
              <Button
                className="btn-black-header btn-action"
                variant="contained"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        )}

        {pathname === "/" && window.pageYOffset > 450 ? (
          <div className="col-md-6 d-none d-md-block d-lg-block">
            <div className="d-flex flex-row-reverse ">
              <Button
                className="btn-black-header btn-action"
                variant="contained"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        ) : null}

        <HamburgerCollapse
          className="collapse-button pe-md-5 me-md-5"
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
