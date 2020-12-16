import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Demo from "../components/Demo"
import Button from "@material-ui/core/Button"

import logos from "../images/backedlogos.png"

import "../styles/index.css"

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left pl-5">
          <div className="row container justify-content-left pl-5 pt-5">
            <div className="col-md-12 col-12">
              <h1>
                We partner with cities to power the future of public transit
              </h1>
            </div>
          </div>
          <div className="row container justify-content-left pl-5 pt-2">
            <div className="col-lg-5 col-12">
              {/* <h3> */}
              Millions of businesses of all sizes—from startups to large
              enterprises—use TRC software and APIs to [action], [action] and
              [action].
              {/* </h3> */}
            </div>
          </div>
          <div className="row container demo-buttons pl-5">
            <div className=" justify-content-left pt-3">
              <div className="action-buttons row pl-3">
                <div className="action-buttons pr-3">
                  <Button className="btn-black btn-action" variant="contained">
                    Primary Action
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn btn-raised btn-secondary">
                    Secondary Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section features justify-content-left pl-5">
          <div className="row container justify-content-left pl-5">
            <div className="col-lg-8 col-12 my-2">
              <h3 className="justify-content-left">
                Grow your business with better shipping
              </h3>
            </div>
          </div>
          <div className="d-flex inline row container pl-5">
            <Card
              className="justify-content-left"
              title="Problem that customers face 1"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
            <Card
              title="Problem that customers face 2"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
            <Card
              title="Problem that customers face 3"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
          </div>
        </div>
        <div className="section backed">
          <div className="row container pb-5">
            <h3>Backed by the Best</h3>
          </div>
          <div className="row container justify-content-center">
            <img src={logos} alt="Company Logos" />
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
