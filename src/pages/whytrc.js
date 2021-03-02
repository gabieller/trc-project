import React from "react"
import Layout from "../components/Layout"
import Arrow from "../components/Arrow"
import Responsive from "../components/Responsive"
import Button from "@material-ui/core/Button"

import coverage from "../images/coverage-icon.svg"
import efficiency from "../images/efficiency-icon.svg"
import equity from "../images/equity-icon.svg"
import convenience from "../images/convenience-icon.svg"
import howitworks from "../images/whytrc-howitworks.jpg"
import whytrclines from "../images/whytrc-lines.jpg"
import mockup_ridepingo from "../images/mockup-ridepingo.png"
import womanillustration from "../images/woman-illustration.png"
import add_circle from "../images/add_circle.svg"
import equal_circle from "../images/equal_circle.svg"
import mockup from "../images/mockup.png"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"

import "../styles/whytrc.css"

// TODO: fix image resize on large screens at how it works card
// TODO: fix text size at lines cards
// TODO: correct picture how it works card
// TODO: break lines with <n> didn't working
export default function WhyTRC(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page" className="container-fluid">
        <div className="section why-trc">
          <div className="container">
            <div className="row pb-5">
              <Responsive.Desktop>
                <h1>
                  It’s <br />
                  <p className="green">
                    time to launch the most efficient <br /> on-demand
                    transportation system in the world
                  </p>
                </h1>
              </Responsive.Desktop>
              <Responsive.Mobile>
                <h1>
                  It’s time
                  <br />
                  <p className="green">
                    to launch the most efficient on-demand transportation system
                    in the world
                  </p>
                </h1>
              </Responsive.Mobile>
            </div>
            <div className="row">
              <div className="col-md-3 pb-3 pb-md-0 pe-md-3">
                <div className=" card bg-white border border-dark mx-0">
                  <div className="card-body icons d-flex flex-row ">
                    <img src={coverage} alt="Coverage Icon" />
                    <h4 className="card-title m-0 ps-3">Coverage</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pb-3 pb-md-0 pe-md-3">
                <div className="card bg-white border border-dark mx-0">
                  <div className="card-body icons d-flex flex-row">
                    <img src={efficiency} alt="Efficiency Icon" />
                    <h4 className="card-title m-0 ps-3">Efficiency</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pb-3 pb-md-0 pe-md-3">
                <div className="card bg-white border border-dark mx-0">
                  <div className="card-body icons d-flex flex-row">
                    <img src={equity} alt="equity Icon" />
                    <h4 className="card-title m-0 ps-3">Equity</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pb-3 pb-md-0 pe-md-3">
                <div className="card bg-white  border border-dark mx-0">
                  <div className="card-body d-flex flex-row">
                    <img src={convenience} alt="Convenience Icon" />
                    <h4 className="card-title m-0 ps-3">Convenience</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-trc py-0">
          <div className="container justify-content-center">
            <div className="row">
              <div className="col-md-3 text-center pb-2">
                All possible routes are considered in real time
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Global optimization allows you to optimize for the city not the
                individual
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Real-time rebalancing reduces vehicle miles travelled
              </div>
            </div>

            <div className="row justify-content-center pt-4 equal-icon">
              <div className="col-md-1 text-center pb-2">
                <img src={equal_circle} alt="Equal Icon" />
              </div>
            </div>

            <div>
              <h2 className="text-center pt-5 fw-bold">
                A revolution in demand-response transportation
              </h2>
            </div>
            <div className="row pt-5 justify-content-center">
              <img src={mockup} alt="Mockup" />
            </div>
          </div>
        </div>

        {/* <Responsive.Desktop> */}
        <div className="container-fluid container-xxl border-md border-top border-bottom border-dark bg-white">
          <div className="row">
            <div className="col-12 col-md-7 how-it-works d-flex flex-column justify-content-center align-items-center p-5">
              <h2 className="col-12 col-md-9 pb-3">How it works</h2>
              <div className="col-12 col-md-9">
                <p>
                  You’ll get a full product suite to dynamically route shared
                  rides in real-time through a fleet management dashboard, a
                  rider app, and a driver app, all powered by MIT-inspired
                  technology.
                </p>
                <p>
                  It’s the first set of tools in microtransit to allow you to
                  match 14+ riders in a vehicle safely at once.
                </p>
              </div>
            </div>

            <div className="col-md-5 g-0">
              <img
                src={howitworks}
                className="map-image"
                alt="Map"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* </Responsive.Desktop> */}

        {/* <Responsive.Mobile>
          <div className="section-mini border-top border-bottom border-dark subject ">
            <div className="container">
              <h2 className="fw-bold">How it works</h2>
              <div className="col-10">
                You’ll get a full product suite to dynamically route shared
                rides in real-time through a fleet management dashboard, a rider
                app, and a driver app, all powered by MIT-inspired technology.
                It’s the first set of tools in microtransit to allow you to
                match 14+ riders in a vehicle safely at once.
              </div>
            </div>
          </div>
        </Responsive.Mobile> */}

        <div className="container-fluid container-xxl">
          <div className="row g-0">
            <div className="col-md-5 p-0 col-left d-none d-md-block">
              <img
                src={whytrclines}
                className="border border-top-0 border-dark"
                alt="Why TRC"
                width="100%"
                height="100%"
              />
            </div>

            <Arrow />

            <div className="col-md-5 bg-white col-right border border-top-0 border-dark pt-5 px-5">
              <div className="row solutions flex-column">
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">1.</h4>
                  <div className="pb-3 pb-md-5">
                    We work with you to build solutions that are tailor-made to
                    your transit needs.
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">2.</h4>
                  <div className="pb-3 pb-md-5">
                    You access TRC fleet management tools to setup a fleet of
                    shuttles and buses in your city to operate on-demand.
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">3.</h4>
                  <div className="pb-3 pb-md-5">
                    You set the pricing, you are in control.
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">4.</h4>
                  <div className="pb-3 pb-md-5">
                    Your riders and drivers get separate apps and your operators
                    get call center booking tools.
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">5.</h4>
                  <div className="pb-3 pb-md-5">
                    You increase your coverage area and core metrics with less
                    stress and less money spent on operations.
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <h4 className="pb-3 fw-bold">6.</h4>
                  <div className="pb-3 pb-md-5">
                    Riders enjoy lower wait times and more reliable service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Responsive.Desktop>
          <div className="section-mini">
            <div className=" container box-shadow shadow-lg ">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="col-4">
                  <img src={mockup_ridepingo} alt="Ride Pingo"></img>
                </div>
                <div className="col-7 px-5">
                  <h2 className="fw-bold text-uppercase">
                    Ride Pingo! <br /> Download our rider app
                  </h2>
                  <h2>Transit that moves with you</h2>
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
              <div className="col-md-1 wrap-illustration d-flex justify-content-end">
                <img
                  src={womanillustration}
                  alt="Woman Standing"
                  className="somewhere-illustration"
                  width="450px"
                />
              </div>
            </div>
          </div>
        </Responsive.Desktop>

        <Responsive.Mobile>
          <div className="row pt-5">
            <div className="container box-shadow shadow col-9">
              <div className="d-flex flex-column pt-3 pb-5">
                <div>
                  <img src={mockup_ridepingo} alt="Ride Pingo" className="img-fluid"/>
                </div>
                <div>
                  <h3 className="fw-bold text-uppercase pt-5">
                    Ride Pingo! <br />
                  </h3>
                  <h3 className="fw-bold">Download our rider app</h3>
                  <p className="fs-5">Transit that moves with you</p>
                  <div className="d-flex flex-row justify-content-center">
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
              <div className="col-8 wrap-illustration-mobile">
                <img
                  src={womanillustration}
                  alt="Woman Standing"
                  className="somewhere-illustration-mobile img-fluid"
                />
              </div>
            </div>
          </div>
        </Responsive.Mobile>

        <div className="section-mini">
          <div className="container fs-1 col-8 col-md-12">
            Lower costs. More coverage.
            <div className="col-12 col-md-6 pt-3 pt-md-0">
              <div className="action-buttons">
                <Button className="btn-black btn-action" variant="contained">
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
