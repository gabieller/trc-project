import React from "react"
import { Helmet } from "react-helmet"

export default function Layout(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The routing company</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={`container-fluid `}>{props.children}</div>
    </>
  )
}
