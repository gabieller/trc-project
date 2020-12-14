import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Demo from "../components/Demo"
import Button from "@material-ui/core/Button"

import "../styles/index.css"

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <h1 className="text-center">
                We partner with cities to power the future of public transit
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <h2 className="text-center">
                Et has minim elitr intellegat at nam minimum ponderum
              </h2>
            </div>
          </div>
          <div className="action-buttons row justify-content-around col-12 col-lg-8 col-xl-4">
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                Primary Action
              </Button>
            </div>
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                Secondary Action
              </Button>
            </div>
          </div>
        </div>

        <div className="section features">
          <div className="row justify-content-center pl-3">
            <div className="col-lg-8 col-12 my-2">
              <h3 className="justify-content-left">
                Grow your business with better shipping
              </h3>
            </div>
          </div>
          <div className="d-flex inline row container justify-content-center">
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
          <div className="row">Backed by the Best</div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
