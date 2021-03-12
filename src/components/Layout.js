import React, { useState, useEffect } from "react"

import { Helmet } from "react-helmet"

import Header from "./Header"
import CookieConsent from "../components/CookieConsent"
import Footer from "./Footer"

import "../styles/layout.css"
// import loadingtrc from "../images/trc-loading.png"
import loadingtrc from "../images/TRC_logo_motion.gif"

export default function Layout(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [loading, setLoading] = useState(true)
  const isSSR = typeof window === "undefined"

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
        <script src="https://medium-widget.pixelpoint.io/widget.js" />
      </Helmet>

      <div className={`loading ${loading ? "open" : ""}`}>
        <img src={loadingtrc} alt="Loading Gif" width="1500" />
      </div>

      {!isSSR && (
        <>
          <Header uri={props.uri} onOpen={isOpen => setOpenSidebar(isOpen)} />
          <CookieConsent />

          <div className={`main-container ${isOpenSidebar && "open"} pt-0`}>
            {props.children}
          </div>
          <Footer />
        </>
      )}
    </>
  )
}
