import React, { Suspense } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"

const MediumIntegration = React.lazy(() =>
  import("../components/MediumIntegration")
)

export default function Blog(props) {
  return (
    <Layout {...props}>
      <div className="section-mini" style={{ background: "#F5F4F5" }}>
        <div className="container g-0">
          <h1 className="col-8 col-md-12">What we have been up to</h1>
          <Suspense fallback={<div />}>
            <MediumIntegration />
          </Suspense>
        </div>
      </div>
      <Demo />
    </Layout>
  )
}
