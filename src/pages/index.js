import React, { Suspense } from "react"

import Layout from "../components/Layout"
import CardTeam from "../components/CardTeam"
import Demo from "../components/Demo"
import CookieConsent from "../components/CookieConsent"
import "../styles/index.css"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)
const MediumIntegration = React.lazy(() =>
  import("../components/MediumIntegration")
)

export default function Home(props) {
  return (
    <Layout {...props}>
      <CookieConsent />
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>
          <div className="container title-content text-left g-0">
            <div className="row justify-content-center g-0">
              <div className="col-md-8">
                <div className="col-12">
                  <h2>
                    Our breakthrough routing technology has been featuredddd in:
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section team">
          <div className="container pb-5">
            <div className="row g-0 col-md-6">
              <h2>Team</h2>
              <div className="col-md-8">
                We are a team of builders from technology, transportation,
                academia and public policy with a passion for helping cities
                unlock transit’s full potential.
              </div>
            </div>
          </div>

          <CardTeam />
        </div>

        <Demo />

        <div className="section-mini" style={{ background: "#F5F4F5" }}>
          <div className="container">
            <h3 className="col-8 col-md-12 pb-3">
              Read about what TRC has been up to
            </h3>
            <Suspense fallback={<div />}>
              <MediumIntegration />
            </Suspense>
          </div>
        </div>
      </div>
    </Layout>
  )
}
