import React, { useRef } from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import LayoutPingo from "../components/LayoutPingo"
import Responsive from "../components/Responsive"
import CanvasPingo from "../components/CanvasPingo"

import trclogo from "../images/trc-logo-black.png"
import arrowright from "../images/arrow-right-black.svg"
import arrowrightmobile from "../images/arrow-right-black-mobile.svg"
import pingologowhite from "../images/pingologowhite.png"
import medium from "../images/medium_black.svg"
import linkedin from "../images/linkedin_black.svg"
import twitter from "../images/twitter_black.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"
import mockup_ridepingo from "../images/mockup-ridepingo.png"
import ridepingo from "../images/ridepingo.png"
import womanillustration from "../images/woman-illustration.png"

import "../styles/pingo.css"

//TODO: fix header to mobile and desktop
//TODO: fix card size large screen
//TODO: logo TRC BARRA
export default function Pingo(props) {
  const canvasRef = useRef()
  return (
    <LayoutPingo {...props}>
      <div id="pingo-page" className="container-fluid">
        <Responsive.Desktop>
          <div id="pingo-header">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <CanvasPingo ref={canvasRef} />
            </div>

            <div className="container" role="application">
              <div className="d-flex flex-row">
                <div
                  id="social-icons"
                  className="col-3 py-3 d-flex align-middle"
                >
                  <Button
                    className="btn btn-link px-0"
                    href="https://medium.com/routable-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={medium}
                      alt="Medium button"
                      width="24"
                      height="24"
                    />
                  </Button>
                  <Button
                    className="btn btn-link"
                    href="https://twitter.com/routing_company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={twitter}
                      alt="Twitter button"
                      className="img-fluid"
                    />
                  </Button>
                  <Button
                    className="btn btn-link"
                    href="https://www.linkedin.com/company/theroutingcompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin button"
                      className="img-fluid"
                    />
                  </Button>
                </div>

                <div className="col-9">
                  <Link to="/">
                    <div className="d-flex flex-row-reverse row-trc-logo user-select-none">
                      <img
                        className="img-fluid trc-logo"
                        src={trclogo}
                        alt="Pingo Main logo"
                        width="650"
                        height="400"
                      />
                      <img src={arrowright} alt="Go to TRC" />
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className=" d-flex flex-row pingo-landing-page user-select-none justify-content-center"
                onMouseDown={e => {
                  e.stopPropagation()
                  canvasRef.current.triggerAnimation(e)
                }}
              >
                <img
                  className="img-fluid pingo-logo"
                  src={pingologowhite}
                  alt="Pingo Main logo"
                />
                <h1 className="d-flex align-items-center fs-3 ps-3">
                  Transit <br />
                  that moves <br />
                  with you
                </h1>
              </div>
              <div
                id="download-pingo"
                className="col-10 d-flex flex-row section container shadow-lg bg-white container"
              >
                <div className="row col-md-6">
                  <h2 className="fs-5">
                    The whole city in <br />
                    the palm of your hand.
                  </h2>
                  <h2 className="fs-1">Download</h2>
                  <h2 className="fw-bold fs-1">Pingo Rider</h2>
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

                <div className="col-md-3 wrap-mockup">
                  <img
                    src={ridepingo}
                    alt="Mockup Pingo"
                    className="mockup-image img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="announcements-card" className="section">
            <div className="container">
              <div className=" announcements-title">
                <h3 className="green fs-2">The talk of the town</h3>
              </div>

              <div className="announcements-list">
                <div className="announcements-1 p-5 d-flex flex-column ">
                  <div className="announcements-text fs-5">
                    <div>
                      “The most fun <br /> app to use!”
                    </div>
                    <div className="pt-5 announcements-name">
                      George M., <br /> Pingo rider
                    </div>
                  </div>
                </div>

                <div className="announcements-2 p-5 d-flex flex-column ">
                  <div className="announcements-text fs-5">
                    <div>“Pingo helps me save 20 minutes every day!</div>
                    <div className="pt-5 announcements-name">
                      Savannah W., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-3 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>“It’s a huge improvement on my commute. Love it!”</div>
                    <div className="pt-5 announcements-name">
                      Jason O., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-4 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>
                      “I wish I had discovered Pingo before. It’s incredible!”
                    </div>
                    <div className="pt-5 announcements-name ">
                      Maria B., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-5 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>
                      I love Pingo, and I love the impact it has on my city - I
                      definitely recommend it!”
                    </div>
                    <div className="pt-3 announcements-name">
                      Sharon S., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-6 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>“It is very easy to use, and super reliable.”</div>
                    <div className="pt-5 announcements-name">
                      Onika P., <br /> Pingo rider
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container section">
            <h3 className="text-center text-hover fs-1">
              Are you <span className="underline-right text-green">ready</span>{" "}
              to have the whole
              <br /> city in the palm of your hand?
            </h3>

            <div id="box-pingo" className="section">
              <div className="container box-shadow shadow-lg ">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <div className="col-4">
                    <img src={mockup_ridepingo} alt="Ride Pingo"></img>
                  </div>
                  <div className="col-7 px-5">
                    <h2>
                      Download <br /> <b>Pingo Driver</b>
                    </h2>
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
                <div className="col-md-1 wrap-illustration-pingo">
                  <img
                    src={womanillustration}
                    alt="Woman Standing"
                    className="somewhere-illustration-pingo"
                    width="450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Responsive.Desktop>

        <Responsive.Mobile>
          <div id="pingo-header">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <CanvasPingo ref={canvasRef} />
            </div>

            <div
              className="container"
              role="application"
              onMouseDown={e => {
                e.stopPropagation()
                canvasRef.current.triggerAnimation(e)
              }}
            >
              <Link to="/">
                <div className="d-flex flex-row-reverse row-trc-logo-mobile user-select-none">
                  <img
                    className="img-fluid trc-logo-mobile g-0"
                    src={trclogo}
                    alt="TRC Main logo"
                    width="650"
                    height="400"
                  />
                  <img
                    src={arrowrightmobile}
                    alt="Go to TRC"
                    className="arrow"
                  />
                </div>
              </Link>
              <div className="row justify-content-center pingo-landing-page user-select-none g-0">
                <div className="row">
                  <img
                    className="img-fluid pingo-logo-mobile g-0"
                    src={pingologowhite}
                    alt="Pingo Main logo"
                    width="650"
                    height="400"
                  />
                </div>

                <div className="row pt-2">
                  <h1 className="fw-bold fs-4 text-center">
                    Transit that moves with you
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column bg-white">
            <div className="container">
              <h2 className="">The whole city in the palm of your hand. </h2>
              Download Pingo Rider
            </div>
          </div>
        </Responsive.Mobile>
      </div>
    </LayoutPingo>
  )
}
