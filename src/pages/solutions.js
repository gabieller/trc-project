import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
import Responsive from "../components/Responsive"
import Button from "@material-ui/core/Button"

import map from "../images/map.png"
import solutionslinesimage from "../images/solutions-img-lines.png"
import pingosolutions from "../images/pingosolutions.png"
import add_circle from "../images/add_circle.svg"
import equal_circle from "../images/equal_circle.svg"
import mockup from "../images/mockup.png"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"

import "../styles/solutions.css"

// TODO: fix image resize on large screens at how it works card
// TODO: fix text size at lines cards
export default function Solutions(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page" className="container-fluid">
        <div className="section">
          <div className="container g-0">
            <div className="row pb-5">
              <h1>How we can help</h1>
            </div>
            <div className="row">
              <div className="col-md-4 pb-3 pb-md-0 pe-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left fw-bold">
                      Demand-responsive
                    </h4>
                    <h4 className="card-title text-left fw-bold">transit</h4>
                    <p className="card-text w-75 ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3 pb-md-0 pe-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left fw-bold">
                      Ridesharing
                    </h4>
                    <h4 className="card-title text-left fw-bold">companies</h4>
                    <p className="card-text w-75 ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3 pb-md-0 pe-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left fw-bold">
                      Transit & para-transit
                    </h4>
                    <h4 className="card-title text-left fw-bold">
                      (WAV) authorities
                    </h4>
                    <p className="card-text w-75 ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Responsive.Desktop>
          <div className="container-fluid container-xxl border border-dark bg-white">
            <div className="row">
              <div className="col-md-7 how-it-works">
                <h2>How it works</h2>
                <div className="col-9">
                  We dynamically routes shared rides in real time through a
                  fleet management dashboard, a rider app and a driver app, all
                  powered by MIT-born technology. It’s easy to use and built for
                  speed at city-wide scale.
                </div>
              </div>

              <div className="col-md-5 g-0">
                <img
                  src={map}
                  className="map-image"
                  alt="Map"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </Responsive.Desktop>

        <Responsive.Mobile>
          <div className="section-mini border-top border-bottom border-dark subject ">
            <div className="container">
              <h2 className="fw-bold">How it works</h2>
              <div className="col-10">
                We dynamically routes shared rides in real time through a fleet
                management dashboard, a rider app and a driver app, all powered
                by MIT-born technology. It’s easy to use and built for speed at
                city-wide scale.
              </div>
            </div>
          </div>
        </Responsive.Mobile>

        <div className="container-fluid container-xxl">
          <div className="row g-0">
            <div className="col-md-5 p-0 col-left d-none d-md-block">
              <img
                src={solutionslinesimage}
                className="border border-top-0 border-dark"
                alt="Solutions"
                width="100%"
                height="100%"
              />
            </div>

            <Arrow />

            <div className="col-md-5 bg-white col-right border border-top-0 border-dark pt-5 px-md-5">
              <div className="row solutions flex-column">
                <div className="col-9">
                  <h4 className="pb-3 fw-bold">1. We partner with you</h4>
                  <div className="pb-5">
                    We work with you to build solutions that are tailor-made to
                    your transit needs.
                  </div>
                </div>
                <div className="col-9">
                  <h4 className="pb-3 fw-bold">
                    2. Our routing engine gets to work
                  </h4>
                  <div className="pb-5">
                    You get access to tools and technology that calculate the
                    most optimal routes for your vehiclís and rides in real
                    time.
                  </div>
                </div>
                <div className="col-9">
                  <h4 className="pb-3 fw-bold">
                    3. Less stress, more time and money saved
                  </h4>
                  <div className="pb-5">
                    Riders enjoy lower wait times and more reliable service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container justify-content-center">
            <div className="row">
              <div className="col-md-3 text-center pb-2">
                Exponentially richer possibility set
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Global optimization
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Rebalancing for future performance
              </div>
            </div>

            <div className="row justify-content-center pt-4 equal-icon">
              <div className="col-md-1 text-center pb-2">
                <img src={equal_circle} alt="Equal Icon" />
              </div>
            </div>

            <div>
              <h2 className="text-center pt-5">
                A revolution in demand-response transportation
              </h2>
            </div>
            <div className="row pt-5 justify-content-center mockup">
              <img src={mockup} alt="Mockup" width="100%" height="100%" />
            </div>
          </div>
        </div>

        <div className="section-mini">
          <div className="container-fluid container-md">
            <div className="row bg-white g-0">
              <div className="col-md-5">
                <img src={pingosolutions} alt="Pingo Solutions" width="100%" />
              </div>
              <div className="col-md-7 justify-content-left p-5 border border-dark">
                <div className="container">
                  <h3 className="fw-bold pt-md-5">Pingo</h3>
                </div>
                <div className="container">
                  <h3>Transit that moves with you</h3>
                </div>
                <div className="container pt-3">
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum.
                  <div className="action-buttons py-4">
                    <Button className="btn-black" variant="contained">
                      Primary Action
                    </Button>
                  </div>
                </div>

                <div className="container">
                  <div className="col-6 col-md-6 d-md-flex">
                    <button className="btn btn-link px-0">
                      <img
                        src={googleplaybadge}
                        alt="Google Play Download"
                        className="img-fluid"
                      />
                    </button>
                    <button className="btn btn-link px-0">
                      <img
                        src={appstorebadge}
                        alt="App Store Download"
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
