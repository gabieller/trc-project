import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import MediumIntegration from "../components/MediumIntegration"

export default function Blog(props) {
  return (
    <Layout {...props}>
      <div className="section-mini" style={{ background: "#F5F4F5" }}>
        <div className="container g-0">
          <h1 className="col-8 col-md-12">What we have been up to</h1>
          <MediumIntegration />
        </div>
      </div>
      <Demo />
    </Layout>
  )
}
