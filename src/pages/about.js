import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Newsletter from "../components/Newsletter"
import CardTeam from "../components/CardTeam"

import newsletterimage from "../images/newsletterimage.png"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about" className="container-fluid">
        <div className="section title">
          <div className="container title-content">
            <div className="row">
              <div className="col-12 col-md-8">
                <h1>
                  A world-class team focused on solving transportation problems
                </h1>
              </div>
            </div>
            <div className="row justify-content-left">
              <div className="col-12 col-md-6">
                We are a team of builders from technology, transportation,
                academia and public policy with a passion for helping cities
                unlock transit’s full potential.
              </div>
            </div>
          </div>
        </div>

        <CardTeam />

        <div className="row col-10 col-md-6 text-center g-0 pt-5 text-build">
          We build smart, sustainable transit solutions that are more reliable
          and accessible than other mobility options. Our MIT-born routing
          technology has been hailed as a striking example of the potential
          around ridesharing.
        </div>
        <div className="section newsletter">
          <div className="container px-4">
            <div className="row  border border-dark bg-white g-0">
              <div className="col-12 col-md-5">
                <img
                  src={newsletterimage}
                  alt="Newsletter"
                  className="img-fluid"
                  width="100%"
                />
              </div>
              <div className="col-12 col-md-7 d-flex align-items-center pt-5 pt-md-0">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
