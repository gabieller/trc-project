import React from "react"
import Layout from "../components/Layout"
import { useMediaQuery } from "react-responsive"
import Demo from "../components/Demo"
import DownloadButtons from "../components/DownloadButtons"
import Button from "@material-ui/core/Button"

import map from "../images/map.png"
import solutionslinesimage from "../images/solutions-img-lines.png"
import arrow from "../images/arrow.svg"
import pingosolutions from "../images/pingosolutions.png"
import add_circle from "../images/add_circle.svg"
import equal_circle from "../images/equal_circle.svg"
import mockup from "../images/mockup.png"

import "../styles/solutions.css"

export default function Solutions(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 701px)",
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  })

  return (
    <Layout {...props}>
      <div id="solutions-page" className="container-fluid">
        <div className="section title justify-content-left pl-md-5 pl-xs-0">
          <div className="row container solutions-header-title pl-5 mx-3">
            <div className="col-md-6 col-xs-8">
              <h2>How we can help</h2>
            </div>
          </div>
          <div className="d-flex inline row container pl-5">
            <div className="card bg-white col-11 col-md-4 col-lg-3 my-2 mx-2 border border-dark">
              <div className="card-body">
                <h5 className="card-title font-weight-bold pt-2">
                  Demand-responsive transit
                </h5>
                <div className="card-text pt-2">
                  Many transit authorities worldwide experimenting with on
                  demand buses
                </div>
              </div>
            </div>
            <div className="card bg-white border border-dark col-11 col-md-4 col-lg-3 my-2 mx-2 border border-dark">
              <div className="card-body">
                <h5 className="card-title font-weight-bold pt-2 my-0">
                  Ridesharing
                </h5>
                <h5 className="card-title font-weight-bold">companies</h5>
                <div className="card-text pt-2">
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
              </div>
            </div>
            <div className="card bg-white border border-dark col-11 col-md-4 col-lg-3 my-2 mx-2 border border-dark">
              <div className="card-body">
                <h5 className="card-title font-weight-bold pt-2">
                  Transit & para-transit (WAV) authorities
                </h5>
                <div className="card-text pt-2">
                  Wait times are typically far higher for those who needs WAVs.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {isDesktopOrLaptop && (
            <>
              <div id="solutions-how-it-works">
                <div className="row p-0">
                  <div className="col-md-7 border border-dark border-right-0 title">
                    <h2 className="justify-content-left">How it works</h2>
                    <div className="col-md-8 p-0 p-sm-2">
                      We dynamically routes shared rides in real time through a
                      fleet management dashboard, a rider app and a driver app,
                      all powered by MIT-born technology. It’s easy to use and
                      built for speed at city-wide scale.
                    </div>
                  </div>
                  <div className="col-md-5 p-0">
                    <img
                      src={map}
                      alt="Map"
                      className="fill border border-dark"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
              <div id="solutions-lines">
                <div className="row">
                  <div className="col-md-5 p-0 border-bottom border-dark col-right">
                    <div>
                      <img
                        src={solutionslinesimage}
                        alt="Solutions"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>

                  <div className="col-md-2 border-dark border-left arrow-interaction ">
                    <div className="text-center">
                      <img src={arrow} alt="Arrow Interaction" />
                    </div>
                  </div>

                  <div className="col-md-5 border-left border-bottom border-dark pt-5 col-left">
                    <div className="row container py-5 col-md-8">
                      <h3 className="pb-3">1. We partner with you</h3>
                      We work with you to build solutions that are tailor-made
                      to your transit needs.
                    </div>
                    <div className="row container ">
                      <div className="row container py-5 col-md-8">
                        <h3 className="pb-3">
                          2. Our routing engine gets to work
                        </h3>
                        You get access to tools and technology that calculate
                        the most optimal routes for your vehiclís and rides in
                        real time.
                      </div>
                    </div>
                    <div className="row container">
                      <div className="row container py-5 col-md-8">
                        <h3 className="pb-3">
                          3. Less stress, more time and money saved
                        </h3>
                        Riders enjoy lower wait times and more reliable service.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="solutions-products">
                <div className="d-flex flex-row container pt-5">
                  <div className="col-md-2 text-center">
                    Exponentially richer possibility set
                  </div>
                  <div className="col-md-3 text-center">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-md-2 text-center">
                    Global optimization
                  </div>
                  <div className="col-md-3 text-center">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-md-2 text-center">
                    Rebalancing for future performance
                  </div>
                </div>
                {/* <hr className="line"/> */}
                <div className="row container justify-content-center pt-4 equal-icon">
                  <img src={equal_circle} alt="Equal Icon" />
                </div>
                <div>
                  <h2 className="text-center pt-5">
                    A revolution in demand-response transportation
                  </h2>
                </div>
                <div className="row container pt-5 justify-content-center mockup">
                  <img src={mockup} alt="Mockup" width="100%" height="100%" />
                </div>
              </div>
            </>
          )}
          {isTabletOrMobileDevice && (
            <>
              <div id="solutions-how-it-works">
                <div className="row border border-dark border-right-0 border-left-0 subject">
                  <div className="col-xs-3">
                    <h2 className="justify-content-left pb-3">How it works</h2>
                  </div>
                  <div className="col-xs-3 pb-5">
                    We dynamically routes shared rides in real time through a
                    fleet management dashboard, a rider app and a driver app,
                    all powered by MIT-born technology. It’s easy to use and
                    built for speed at city-wide scale.
                  </div>
                </div>
              </div>
              <div id="solutions-topics">
                <div className="row border-bottom border-dark pt-5">
                  <div className="row container">
                    <div className="row container py-3 px-4">
                      <h4 className="pb-2">1. We partner with you</h4>
                      We work with you to build solutions that are tailor-made
                      to your transit needs.
                    </div>
                  </div>
                  <div className="row container">
                    <div className="row container py-3 px-4">
                      <h4 className="pb-2">
                        2. Our routing engine gets to work
                      </h4>
                      You get access to tools and technology that calculate the
                      most optimal routes for your vehiclís and rides in real
                      time.
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
              <div id="solutions-products">
                <div className="d-flex flex-column container text-center pt-5">
                  <div className="col-md-2">
                    Exponentially richer possibility set
                  </div>
                  <div className="col-md-3 py-3">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-md-2">Global optimization</div>
                  <div className="col-md-3 py-3">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-md-2">
                    Rebalancing for future performance
                  </div>
                </div>
                <div className="row container justify-content-center equal-icon-mobile py-3">
                  <img src={equal_circle} alt="Equal Icon" />
                </div>
                <div className="row container px-5">
                  <h3 className="text-center">
                    A revolution in demand-response transportation
                  </h3>
                </div>
                <div className="row pt-5 justify-content-center mockup px-0">
                  <img src={mockup} alt="Mockup" width="100%" height="100%" />
                </div>
              </div>
            </>
          )}
        </div>

        <div id="pingo-solutions">
          <div className="row container py-5  px-5">
            <div className="row border border-dark bg-white">
              <div className="col-md-5 px-0">
                <img
                  src={pingosolutions}
                  alt="Pingo Solutions"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-md-7 py-md-5 py-xs-0">
                <div className="row container justify-content-left">
                  <h2 className="font-weight-bold pt-5">Pingo</h2>
                </div>
                <div className="row container justify-content-left">
                  <h3>Transit that moves with you</h3>
                </div>
                <div className="row container pr-3 pt-3">
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te. Ex duo eripuit mentitum.
                  <div className="action-buttons px-0 py-3 col-md-4 col-sm-12">
                    <Button className="btn-black" variant="contained">
                      Primary Action
                    </Button>
                  </div>
                </div>
                <DownloadButtons />
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
