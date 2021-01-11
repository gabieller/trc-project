import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
// import Responsive from "../components/Responsive"
import Button from "@material-ui/core/Button"

import map from "../images/map.png"
import solutionslinesimage from "../images/solutions-img-lines.png"
import pingosolutions from "../images/pingosolutions.png"
import add_circle from "../images/add_circle.svg"
import equal_circle from "../images/equal_circle.svg"
import mockup from "../images/mockup.png"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

import "../styles/solutions.css"

// TODO: fix image resize on large screens at how it works card
// TODO: fix text size at lines cards
export default function Solutions(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page" className="container-fluid">
        <div className="section">
          <div className="container">
            <div className="row no-gutters">
              <h1>How we can help</h1>
            </div>

            <div className="row no-gutters">
              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left font-weight-bold w-75">
                      Demand-responsive transit
                    </h4>
                    <p className="card-text ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left font-weight-bold w-75">
                      Ridesharing companies
                    </h4>
                    <p className="card-text ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3 pb-md-0 pr-md-3">
                <div className="card border border-dark mx-0">
                  <div className="card-body">
                    <h4 className="card-title text-left font-weight-bold">
                      Transit & para-transit (WAV) authorities
                    </h4>
                    <p className="card-text ">
                      Many transit authorities worldwide experimenting with on
                      demand buses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Responsive.Desktop> */}

        <div className="row border-top border-bottom border-dark bg-white">
          <div className="row no-gutters">
            <div className="col-md-7 no-gutters pt-5">
              <div className="row col-8">
                <h2>How it works</h2>
                <div>
                  We dynamically routes shared rides in real time through a
                  fleet management dashboard, a rider app and a driver app, all
                  powered by MIT-born technology. It’s easy to use and built for
                  speed at city-wide scale.
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <img
                src={map}
                className="map-image"
                alt="Map"
                className="img-fluid"
                width="100%"
              />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-5 p-0  col-left d-none d-md-block">
            <img
              src={solutionslinesimage}
              className="border-bottom border-dark"
              alt="Solutions"
              width="100%"
              height="100%"
            />
          </div>

          <Arrow />

          <div className="col-md-5 border-bottom border-dark bg-white col-right">
            <div className="row solutions">
              <div className="col-10">
                <div className="col-4">
                  <h4 className="pb-3 font-weight-bold">
                    1. We partner with you
                  </h4>
                </div>
                <div className="col-5 pb-5">
                  We work with you to build solutions that are tailor-made to
                  your transit needs.
                </div>
                <div className="col-4">
                  <h4 className="pb-3 font-weight-bold">
                    2. Our routing engine gets to work
                  </h4>
                </div>
                <div className="col-5 pb-5">
                  You get access to tools and technology that calculate the most
                  optimal routes for your vehiclís and rides in real time.
                </div>
                <div className="col-4">
                  <h4 className="pb-3 font-weight-bold">
                    3. Less stress, more time and money saved
                  </h4>
                </div>
                <div className="col-5 pb-5">
                  Riders enjoy lower wait times and more reliable service.
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card">
                    <div className="card-body">
                      <h4 className="card-title font-weight-bold">
                        1. We partner with you
                      </h4>
                      <p className="card-text">
                        We work with you to build solutions that are tailor-made
                        to your transit needs.
                      </p>
                    </div>
                  </div> */}
          {/* <div className="card">
                    <div className="card-body">
                      <h4 className="card-title font-weight-bold">
                        2. Our routing engine gets to work
                      </h4>
                      <p className="card-text">
                        You get access to tools and technology that calculate
                        the most optimal routes for your vehiclís and rides in
                        real time.
                      </p>
                    </div>
                  </div> */}
          {/* <div className="card">
                    <div className="card-body">
                      <h4 className="card-title font-weight-bold">
                        3. Less stress, more time and money saved
                      </h4>
                      <p className="card-text w-75">
                        Riders enjoy lower wait times and more reliable service.
                      </p>
                    </div>
                  </div> */}
        </div>
        {/* </div> */}

        <div className="section">
          <div className="container justify-content-center">
          <div className="row">
            <div className="col-md-3 text-center pb-2">
              Exponentially richer possibility set
            </div>
            <div className="col-md-1 text-center pb-2">
              <img src={add_circle} alt="Add Icon" />
            </div>
            <div className="col-md-3 text-center pb-2">Global optimization</div>
            <div className="col-md-1 text-center pb-2">
              <img src={add_circle} alt="Add Icon" />
            </div>
            <div className="col-md-3 text-center pb-2">
              Rebalancing for future performance
            </div>
          </div>
          <div className="row justify-content-center pt-2 equal-icon">
            <img src={equal_circle} alt="Equal Icon" />
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
        {/* </Responsive.Desktop> */}

        {/* <Responsive.Mobile>
          <div id="solutions-how-it-works">
            <div className="row border border-dark border-right-0 border-left-0 subject">
              <div className="col-9 pl-0">
                <h2 className="justify-content-left pb-3">How it works</h2>
              </div>
              <div className="col-10 pb-5 pl-0 font-weight-normal">
                We dynamically routes shared rides in real time through a fleet
                management dashboard, a rider app and a driver app, all powered
                by MIT-born technology. It’s easy to use and built for speed at
                city-wide scale.
              </div>
            </div>
          </div>
          <div id="solutions-topics">
            <div className="row border-bottom border-dark pt-5 bg-white">
              <div className="row container">
                <div className="row container py-3 px-4">
                  <h4 className="pb-2">1. We partner with you</h4>
                  We work with you to build solutions that are tailor-made to
                  your transit needs.
                </div>
              </div>
              <div className="row container">
                <div className="row container py-3 px-4">
                  <h4 className="pb-2">2. Our routing engine gets to work</h4>
                  You get access to tools and technology that calculate the most
                  optimal routes for your vehiclís and rides in real time.
                </div>
              </div>
              <div className="row container">
                <div className="row container pt-3 pb-5 px-4">
                  <h4 className="pb-2">
                    3. Less stress, more time and money saved
                  </h4>
                  Riders enjoy lower wait times and more reliable service.
                </div>
              </div>
            </div>
          </div>
            </div>
        </Responsive.Mobile> */}

        <div className="section">
          <div className="container">
            <div className="row border border-dark bg-white no-gutters">
              <div className="col-md-5">
                <img
                  src={pingosolutions}
                  alt="Pingo Solutions"
                  width="100%"
                />
              </div>
              <div className="col-md-7 justify-content-left p-5">
                <div className="container">
                  <h3 className="font-weight-bold pt-md-5">Pingo</h3>
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

                <div className="container px-1">
                  <button className="btn btn-link px-0">
                    <img
                      src={googleplaybadge}
                      alt="Google Play Download"
                      width="135"
                      height="60"
                    />
                  </button>
                  <button className="btn btn-link pl-2">
                    <img
                      src={appstorebadge}
                      alt="App Store Download"
                      width="120"
                      height="50"
                    />
                  </button>
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
