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
          <div className="title-content">
            <div className="text row container justify-content-left pl-5 pt-5">
              <div className="col-md-11 col-xs-8">
                <h1>
                  We partner with cities to power the future of public transit
                </h1>
              </div>
            </div>
            <div className="row container justify-content-left pl-5 pt-2">
              <div className="col-lg-5 col-12">
                Millions of businesses of all sizes—from startups to large
                enterprises—use TRC software and APIs to [action], [action] and
                [action].
              </div>
            </div>
            <div className="row container buttons pl-5">
              <div className=" justify-content-left pt-md-3 pt-xs-2">
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
            <div className="justify-content-left pl-md-5 pl-xs-0 pt-md-5">
              <div className="row container justify-content-left pl-5">
                <div className="col-lg-8 col-12 my-2">
                  <h3 className="justify-content-left">
                    Grow your business with better shipping
                  </h3>
                </div>
              </div>
              <div className="row container d-flex justify-content-between py-3 pl-5">
                <div className="card col-lg-3 flex-md-column border border-dark py-3 mb-3">
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
                <div className="card col-lg-3 flex-md-column border border-dark py-3 mb-3">
                  <div className="card-body">
                    <h4 className="card-title col-sm-12 px-0 text-left font-weight-bold">
                      Problem that customers face 2
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
                <div className="card col-lg-3 flex-md-column border border-dark py-3 mb-3">
                  <div className="card-body">
                    <h4 className="card-title col-sm-12 px-0 text-left font-weight-bold">
                      Problem that customers face 3
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
              </div>
            </div>
          </div>
        </div>
        <div className="section backed">
          <div className="row container pb-5">
            <h4>Backed by the Best</h4>
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
