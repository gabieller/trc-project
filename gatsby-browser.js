import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.css"
import "popper.js/dist/popper.min"
import "./src/styles/global.css"

import "./src/styles/layout.css"
import loadingtrc from "./src/images/TRC_logo_motion.gif"

const LoadingElement = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <div className={`loading ${loading ? "open" : ""}`}>
        <img src={loadingtrc} alt="Loading Gif" width="1500" />
      </div>

      {children}
    </>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
      </Helmet>

      <LoadingElement>{element}</LoadingElement>
    </>
  )
}
