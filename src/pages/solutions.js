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
        <div className="section title justify-content-left pl-sm-5 pl-0">
          <div className="row container solutions-header-title pl-3 pt-5 mx-3">
            <div className="col-sm-7 col-12 pt-5">
              <h2>How we can help</h2>
            </div>
          </div>
          <div className="row container py-3 pl-sm-5 pl-2 ">
            <div className="card col-lg-3 flex-md-column border border-dark py-4 px-4 mb-3 mx-3">
              <div className="card-body p-0">
                <h4 className="card-title col-md-12 px-0 text-left">
                  Demand-responsive transit
                </h4>
                <h6 className="card-text my-4">
                  Many transit authorities worldwide experimenting with on
                  demand buses.
                </h6>
              </div>
            </div>

            <div className="card col-lg-3 flex-md-column border border-dark py-4 px-4 mb-3 mx-3">
              <div className="card-body p-0">
                <h4 className="card-title col-md-10 px-0 text-left pt-2">
                  Ridesharing companies
                </h4>
                <h6 className="card-text my-4">
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </h6>
              </div>
            </div>
            <div className="card col-lg-3 flex-md-column border border-dark py-4 px-4 mb-3 mx-3">
              <div className="card-body p-0">
                <h4 className="card-title col-md-11 px-0 text-left">
                  Transit & para-transit (WAV) authorities
                </h4>
                <h6 className="card-text my-4">
                  Wait times are typically far higher for those who needs WAVs.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div>
          {isDesktopOrLaptop && (
            <>
              <div id="solutions-how-it-works">
                <div className="row p-0">
                  <div className="col-sm-7 border border-dark border-right-0 title">
                    <h2 className="justify-content-left">How it works</h2>
                    <div className="col-md-10 p-0 p-sm-2 pl-0">
                      We dynamically routes shared rides in real time through a
                      fleet management dashboard, a rider app and a driver app,
                      all powered by MIT-born technology. It’s easy to use and
                      built for speed at city-wide scale.
                    </div>
                  </div>
                  <div className="col-sm-5 p-0">
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
                  <div className="col-sm-5 p-0  col-right">
                    <img
                      src={solutionslinesimage}
                      className="border-bottom border-dark"
                      alt="Solutions"
                      width="100%"
                      height="100%"
                    />
                  </div>

                  <div className="col-sm-2 border-dark border-left arrow-interaction ">
                    <div className="text-center">
                      <img src={arrow} alt="Arrow Interaction" />
                    </div>
                  </div>

                  <div className="col-sm-5 border-left border-bottom border-dark pt-5 col-left">
                    <div className="row container py-5 col-md-9">
                      <h4 className="pb-3 font-weight-bold">
                        1. We partner with you
                      </h4>
                      We work with you to build solutions that are tailor-made
                      to your transit needs.
                    </div>
                    <div className="row container ">
                      <div className="row container py-5 col-md-9">
                        <h4 className="pb-3 font-weight-bold">
                          2. Our routing engine gets to work
                        </h4>
                        You get access to tools and technology that calculate
                        the most optimal routes for your vehiclís and rides in
                        real time.
                      </div>
                    </div>
                    <div className="row container">
                      <div className="row container py-5 col-md-9">
                        <h4 className="pb-3 font-weight-bold">
                          3. Less stress, more time and money saved
                        </h4>
                        Riders enjoy lower wait times and more reliable service.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="solutions-products">
                <div className="d-flex flex-row container pt-5 justify-content-center">
                  <div className="col-sm-3 text-center">
                    Exponentially richer possibility set
                  </div>
                  <div className="col-sm-1 text-center">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    Global optimization
                  </div>
                  <div className="col-sm-1 text-center">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    Rebalancing for future performance
                  </div>
                </div>
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
                  <div className="col-9 pl-0">
                    <h2 className="justify-content-left pb-3">How it works</h2>
                  </div>
                  <div className="col-10 pb-5 pl-0 font-weight-normal" >
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
                  <h4 className="col-md-2">
                    Exponentially richer possibility set
                  </h4>
                  <div className="col-md-3 py-3">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <h4 className="col-md-2">Global optimization</h4>
                  <div className="col-md-3 py-3">
                    <img src={add_circle} alt="Add Icon" />
                  </div>
                  <h4 className="col-md-2">
                    Rebalancing for future performance
                  </h4>
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
          <div className="row container py-5 px-5">
            <div className="row border border-dark bg-white">
              <div className="col-sm-5 px-0">
                <img
                  src={pingosolutions}
                  alt="Pingo Solutions"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-sm-7 md-py-5 py-0">
                <div className="row container justify-content-left">
                  <h3 className="font-weight-bold pt-5">Pingo</h3>
                </div>
                <div className="row container justify-content-left">
                  <h3>Transit that moves with you</h3>
                </div>
                <div className="row container pr-3 pt-3">
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. 
                  <div className="action-buttons px-0 py-3 col-sm-4 col-sm-12">
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
