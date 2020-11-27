import React, { useState } from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/layout.css"

export default function Layout(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
        />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
      </Helmet>

      <Header uri={props.uri} onOpen={isOpen => setOpenSidebar(isOpen)} />
      <div
        className={`container-fluid main-container ${
          isOpenSidebar ? "open" : ""
        }`}
      >
        {props.children}
        <Footer />
      </div>
    </>
  )
}
