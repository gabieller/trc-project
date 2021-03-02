import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Footer from "./Footer"
import ScrollTop from "./ScrollTop"
import loadingpingo from "../images/loading.gif"
import "../styles/layout.css"

export default function LayoutPingo(props) {
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

      <div className={`loading-pingo ${loading ? "open" : ""}`}>
        <img src={loadingpingo} alt="Loading Gif" width="150" height="150" />
      </div>
      <>
        <div className="main-container-pingo">{props.children}</div>
        <Footer />
        <ScrollTop />
      </>
    </>
  )
}
