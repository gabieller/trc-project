import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Footer from "./Footer"
import HeaderPingo from "./HeaderPingo"

import loadingGif from "../images/loading.gif"
import "../styles/layout.css"

export default function LayoutPingo(props) {
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

      {loading && (
        <div className="d-flex justify-content-center loadingGif">
          <img
            className="align-middle"
            src={loadingGif}
            alt="Loading Gif"
            width="150"
            height="150"
          />
        </div>
      )}

      {!loading && (
        <>
          <HeaderPingo
            uri={props.uri}
            onOpen={isOpen => setOpenSidebar(isOpen)}
          />
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
