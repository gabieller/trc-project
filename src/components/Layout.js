import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/layout.css"
import loadingtrc from "../images/trc-loading.png"

export default function Layout(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
      </Helmet>

      {loading && (
        <div className="loading">
          <img src={loadingtrc} alt="Loading Gif" width="500" height="500" />
        </div>
      )}

      {!loading && (
        <>
          <Header uri={props.uri} onOpen={isOpen => setOpenSidebar(isOpen)} />
          <div
            className={`container-fluid main-container ${
              isOpenSidebar && "open"
            }`}
          >
            {props.children}
          </div>
          <Footer />
        </>
      )}
    </>
  )
}
