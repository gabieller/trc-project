import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"

import "../styles/blog.css"

export default function Blog(props) {
  return (
    <Layout {...props}>
      <div id="blog-page">
        <div className="medium-integration">MEDIUM</div>
        <Demo />
      </div>
    </Layout>
  )
}
