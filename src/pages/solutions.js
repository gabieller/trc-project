import React from "react"
import Layout from "../components/Layout"

import "../styles/solutions.css"

function Card({ title, description }) {
  // TODO: make discover link sticky to bottom
  return (
    <div className="card bg-white col-11 col-md-4 col-lg-2 my-2 mx-2">
      <div className="card-body">
        <h5 className="card-title text-center font-weight-bold">{title}</h5>
        <div className="card-text text-center">
          <div className="my-3">{description}</div>
          <div>
            <a href="/">Discover</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page">
        <div id="solutions-header">
          <div className="row container solutions-header-title">
            <div className="col justify-content-left solutions-title pb-3">
              <h2>How we can help</h2>
            </div>
          </div>
          <div className="row container solutions-subtitle">
            <div className="col-md-7 col-sm-12 justify-content-left">
              <h4>
                The Routing Company is focused on partnering with cities,
                transit authorities and operators to make transit more dynamic,
                more reliable and more accessible.
              </h4>
            </div>
          </div>
        </div>

        <div id="solutions-card">
            <div className="row justify-content-center">
              <Card
                title="Shipping communication"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
              />
              <Card
                title="Marketing resources"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
              />
              <Card
                title="Logistic Performances"
                description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
              />
            </div>
        </div>
      </div>
    </Layout>
  )
}
