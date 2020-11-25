import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import "../styles/index.css"

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index">
        <div className="row justify-content-center title">
            <h1>Transportation that moves with you</h1>
        </div>

        <div className="row justify-content-center subtitle">
            <h2>Et has minim elitr intellegat at nam minimum ponderum.</h2>
        </div>

        <div className="container">
          <div className="row buttons">
            <div className="col">
              <Button className="btn-action" variant="contained">
                Primary Action
              </Button>
            </div>
            <div className="col">
              <Button className="btn-action" variant="contained">
                Secondary Action
              </Button>
            </div>
          </div>
        </div>

        <div className="row items ">
            <div className="items-text col-12">Grow your business with better Shipping</div>
            <div className="col-12"> We help the world’s leading organizations follow their shipping</div>

          <div className="row items-card">
            <div className="col-4 item-1 ">
                <div className="card-body">
                  <h5 className="card-title">Shipping communication</h5>
                  <p className="card-text">
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur iuvaret vulputate sed.
                  </p>
                  <Button>Discover</Button>
                </div>
            </div>

            <div className="col-4 item-2">
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                  <p className="card-text">
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur iuvaret vulputate sed.
                  </p>
                  <Button>Discover</Button>
                </div>
            </div>

            <div className="col-4 item-3">
                <div className="card-body">
                  <h5 className="card-title">Logistic performance</h5>
                  <p className="card-text">
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur iuvaret vulputate sed.
                  </p>
                  <Button>Discover</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
