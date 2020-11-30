import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/layout.css"
import loadingGif from "../images/loading-unscreen.gif"

export default function Layout(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
      </Helmet>

    {loading &&(
      <div className="d-flex justify-content-center loadingGif">
        <img className="align-middle" src={loadingGif} alt="Loading Gif" width="150" height="150"/>
      </div>
    )}
    

      {!loading && (
        <>
          <Header uri={props.uri} onOpen={isOpen => setOpenSidebar(isOpen)} />
          <div
            className={`container-fluid main-container ${
              isOpenSidebar ? "open" : ""
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
