import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import "../styles/index.css"

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index" className="container-fluid title">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="title">Transportation that</h1>
            <h1 className="title">moves with you</h1>
          </div>
        </div>

        <div className="row justify-content-center subtitle">
          <div className="col-md">
            <h2 className="subtitle">Et has minim elitr intellegat at nam</h2>
            <h2 className="subtitle"> minimum ponderum</h2>
          </div>
        </div>

        <div className="col-md">
          <div className="row justify-content-center row-buttons">
            <div className="col-6 col-xs-12 col-buttons  ">
              <Button
                className="btn-black btn-block buttons "
                variant="contained"
              >
                Primary Action
              </Button>
            </div>
            <div className="col-6 col-xs-12 buttons ">
              <Button
                className="btn-black btn-block buttons "
                variant="contained"
              >
                Secondary Action
              </Button>
            </div>
          </div>
        </div>

        <div className="row row-items-content inline">
          <div className="row row-items-title">
            <div className="col-md-12 col-title">
              Grow your business with better Shipping
            </div>
            <div className="col-md-12 col-subtitle">
              We help the world’s leading organizations follow their shipping
            </div>
          </div>

          <div className="row items-card">
            <div className="col-md-4 col-item">
              <div className="card-body">
                <h5 className="card-title">Shipping communication</h5>
                <div className="card-text">
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur iuvaret vulputate sed.
                </div>
                <Button className="btn-text">Discover</Button>
              </div>
            </div>

            <div className="col-md-4 col-item">
              <div className="card-body">
                <h5 className="card-title">Marketing</h5>
                <div className="card-text">
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur iuvaret vulputate sed.
                </div>
                <Button className="btn-text">Discover</Button>
              </div>
            </div>

            <div className="col-md-4 col-item">
              <div className="card-body">
                <h5 className="card-title">Logistic performance</h5>
                <div className="card-text">
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur iuvaret vulputate sed.
                </div>
                <Button className="btn-text">Discover</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
