import React, { useState, useEffect } from "react"
import "../styles/scrollTop.css"

import arrowUp from "../images/arrowUp.svg"

export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 50) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      id="toTopBtn"
      onClick={scrollToTop}
      className={`btn btn-link ${showScroll ? "visible" : ""}`}
    >
      <img alt="" src={arrowUp} width="60" height="60"></img>
    </button>
  )
}
