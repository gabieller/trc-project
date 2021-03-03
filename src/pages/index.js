import React, { Suspense } from "react"

import Layout from "../components/Layout"
import CardTeam from "../components/CardTeam"
import Demo from "../components/Demo"
import UserForm from "../components/UserForm"

// import CookieConsent from "../components/CookieConsent"

import cnn from "../images/cnn_logo.svg"
import tech from "../images/tech_logo.svg"
import theverge from "../images/theverge_logo.svg"
import bbc from "../images/bbc_logo.svg"

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
      {/* <CookieConsent /> */}
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>

          <div className="container title-content g-0">
            <div className="bg-white d-flex flex-column section-mini">
              <UserForm />
            </div>
            <div className="row justify-content-center g-0">
              <div className="col-md-9">
                <div className="col-12">
                  <h3>
                    Our breakthrough routing technology has been featured in:
                  </h3>
                  <div className="d-flex justify-content-around pt-3">
                    <img src={cnn} alt="CNN Logo" />
                    <img src={tech} alt="Tech Crunch Logo" />
                    <img src={theverge} alt="The Vergr Logo" />
                    <img src={bbc} alt="BBC Logo" />
                  </div>
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
