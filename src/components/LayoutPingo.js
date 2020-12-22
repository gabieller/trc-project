import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useMediaQuery } from "react-responsive"

import Footer from "./Footer"
import ScrollTop from "./ScrollTop"
import NavBarPingo from "./NavBarPingo"
// import HeaderPingo from "./HeaderPingo"

import loadingpingo from "../images/loading.gif"
import "../styles/layout.css"

export default function LayoutPingo(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [loading, setLoading] = useState(true)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 701px)",
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  })

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
        <div className="loading-pingo">
          <img src={loadingpingo} alt="Loading Gif" width="150" height="150" />
        </div>
      )}
      <div>
        {isDesktopOrLaptop && (
          <>
            {!loading && (
              <>
                <NavBarPingo />
                <div
                  className={`container-fluid main-container ${
                    isOpenSidebar ? "open" : ""
                  }`}
                >
                  {props.children}
                </div>
                <Footer />
                <ScrollTop />
              </>
            )}
          </>
        )}
        {isTabletOrMobileDevice && (
          <>
            {!loading && (
              <>
                {/* <NavBarPingo /> */}
                <div
                  className={`container-fluid main-container ${
                    isOpenSidebar ? "open" : ""
                  }`}
                >
                  {props.children}
                </div>
                <Footer />
                <ScrollTop />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
