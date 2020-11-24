import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"


export default function Layout(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Routing Company</title>
        <link rel="canonical" href="https://theroutingcompany.com/" />
      </Helmet>

      <Header />

      <div className={`container-fluid `}>{props.children}</div>
    </>
  )
}
