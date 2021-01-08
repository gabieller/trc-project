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
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <CanvasAnimation />
            </Suspense>
          </div>
          <div className="title-content text-left">
            <div className="text row container justify-content-center">
              <div className="col-xl-8">
                <h1 className="col-xl-12">
                  We partner with cities to power the future of public transit
                </h1>
              </div>
            </div>
            <div className="row container justify-content-center">
              <div className="col-xl-8">
                <div className="col-xl-8">
                  Millions of businesses of all sizes—from startups to large
                  enterprises—use TRC software and APIs to [action], [action]
                  and [action].
                </div>
              </div>
            </div>
            <div className="row container justify-content-center buttons pb-5">
              <div className="col-xl-8">
                <div className=" justify-content-center pt-md-3 pt-xs-2">
                  <div className="action-buttons row pl-3">
                    <div className="action-buttons pr-3">
                      <Button
                        className="btn-black btn-action"
                        variant="contained"
                      >
                        Primary Action
                      </Button>
                    </div>
                    <div className="action-buttons pl-3">
                      <Button className="btn btn-raised btn-secondary">
                        Secondary Action
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row container pt-5 pb-2 px-xl-0">
              <h2 className="col-xl-12 my-2 px-xl-0">
                <small>Grow your business with better shipping</small>
              </h2>
            </div>
            <div className="row container">
              <div className="justify-content-center d-flex">
                <div className="card col-lg-4  col-md-6  flex-md-column border border-dark py-3 mb-3">
                  <div className="card-body">
                    <h4 className="card-title col-sm-12 px-0 text-left font-weight-bold">
                      Problem that customers face 1
                    </h4>
                    <p className="card-text my-4">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                    <div className="text-center">
                      <a className="text-uppercase pt-3 px-0" href="/">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card col-lg-4 col-md-6 flex-md-column border border-dark py-3 mb-3">
                  <div className="card-body">
                    <h4 className="card-title col-sm-12 px-0 text-left font-weight-bold">
                      Problem that customers face 2
                    </h4>
                    <div className="card-text my-4">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </div>
                    <div className="text-center">
                      <a className="text-uppercase pt-3 px-0" href="/">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card col-lg-4 col-md-6 flex-md-column border border-dark py-3 mb-3">
                  <div className="card-body">
                    <h4 className="card-title col-sm-12 px-0 text-left font-weight-bold">
                      Problem that customers face 3
                    </h4>
                    <div className="card-text my-4">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </div>
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
          <div className="row container pb-5">
            <h2 className="col-xl-12 px-xl-0">
              <small>Backed by the Best</small>
            </h2>
          </div>
          <div className="row container justify-content-center">
            <img src={logos} alt="Company Logos" className="img-fluid" />
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
