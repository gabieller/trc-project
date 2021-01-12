import React, { Suspense } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Button from "@material-ui/core/Button"
import logos from "../images/backedlogos.png"
import "../styles/index.css"
const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <div className="animation-container" />
            <Suspense fallback={<div className="animation-container" />}>
              <CanvasAnimation />
            </Suspense>
          </div>
          <div className="container title-content text-left ">
            <div className="row no-gutters justify-content-center">
              <div className="col-md-8 no-gutters">
                <div className="col-12">
                  <h1>
                    We partner with cities to power the future of public transit
                  </h1>
                </div>
                <div className="col-md-7">
                  Millions of businesses of all sizes—from startups to large
                  enterprises—use TRC software and APIs to [action], [action]
                  and [action].
                </div>
                <div className="col-12 col-md-8">
                  <div className=" justify-content-center pt-md-3 ">
                    <div className="action-buttons row no-gutters pl-3">
                      <div className="action-buttons pr-3">
                        <Button
                          className="btn-black btn-action"
                          variant="contained"
                        >
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
            </div>

            <div className="row no-gutters pt-5 pb-2">
              <h2 className="col-10 col-md-12">
                <small>Grow your business with better shipping</small>
              </h2>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left font-weight-bold">
                      Problem that customers face 1
                    </h4>
                    <p className="card-text ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                    <hr />
                    <div className="text-center">
                      <a className="text-uppercase pt-3" href="/">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark  mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left font-weight-bold">
                      Problem that customers face 2
                    </h4>
                    <div className="card-text ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </div>
                    <hr />

                    <div className="text-center">
                      <a className="text-uppercase pt-3" href="/">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark  mx-0">
                  <div className="card-body">
                    <h4 className="card-title  px-0 text-left font-weight-bold">
                      Problem that customers face 3
                    </h4>
                    <div className="card-text">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </div>
                    <hr />
                    <div className="text-center">
                      <a className="text-uppercase pt-3 px-0" href="/">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section backed">
          <div className="container">
            <div className="row no-gutters pb-5">
              <h2 className="col-xl-12 px-xl-0">
                <small>Backed by the Best</small>
              </h2>
            </div>
            <div className="row no-gutters container justify-content-center">
              <img src={logos} alt="Company Logos" className="img-fluid" />
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
