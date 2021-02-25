import React, { useRef } from "react"
import { Link } from "gatsby"

import LayoutPingo from "../components/LayoutPingo"
import Responsive from "../components/Responsive"
import CanvasPingo from "../components/CanvasPingo"

import trclogo from "../images/trc-logo-black.png"
import arrowright from "../images/arrow-right-black.svg"
import arrowrightmobile from "../images/arrow-right-black-mobile.svg"
import pingologowhite from "../images/pingologowhite.png"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"
import ridepingo from "../images/ridepingo.jpg"
import womanillustration from "../images/woman-illustration.png"

import "../styles/pingo.css"

//TODO: fix header to mobile and desktop
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

            <div
              className="container"
              role="application"
              onMouseDown={e => {
                e.stopPropagation()
                canvasRef.current.triggerAnimation(e)
              }}
            >
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

              <div className=" d-flex flex-row pingo-landing-page user-select-none justify-content-center">
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
                className="d-flex flex-row section-mini container box-shadow bg-white"
              >
                <div className="row col-md-8">
                  <h2 className="fs-6">
                    The whole city in <br />
                    the palm of your hand.
                  </h2>
                  <h2 className="fs-1">Download</h2>
                  <h2 className="fw-bold fs-1">Pingo Rider</h2>
                  <div className="col-6 col-md-4 d-md-flex">
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
              <div className="announcements-title">
                <h3 className="container text-green fs-2">
                  The talk of the town
                </h3>
              </div>
              <div className="announcements-list">
                <div className="announcements-1 p-5">
                  <div className="announcements-text fs-5">
                    “The most fun <br /> app to use!”
                  </div>
                  <div className="pt-5 fs-6">George M., Pingo rider</div>
                </div>

                <div className="announcements-2 p-5">
                  <div className="announcements-text fs-5">
                    <div>“Pingo helps me save 20 minutes every day!</div>
                    <div className="pt-5 fs-6">Savannah W., Pingo rider </div>
                  </div>
                </div>
                <div className="announcements-3 p-5">
                  <div className="announcements-text fs-5">
                    <div>“It’s a huge improvement on my commute. Love it!”</div>
                    <div className="pt-5 fs-6">Jason O., Pingo rider </div>
                  </div>
                </div>
                <div className="announcements-4 p-5">
                  <div className="announcements-text fs-5">
                    <div>
                      “I wish I had discovered Pingo before. It’s incredible!”
                    </div>
                    <div className="pt-5 fs-6">Maria B., Pingo rider </div>
                  </div>
                </div>
                <div className="announcements-5 p-5">
                  <div className="announcements-text fs-5">
                    <div>
                      I love Pingo, and I love the impact it has on my city - I
                      definitely recommend it!”
                    </div>
                    <div className="pt-5 fs-6">Sharon S., Pingo rider </div>
                  </div>
                </div>
                <div className="announcements-6 p-5">
                  <div className="announcements-text fs-5">
                    <div>“It is very easy to use, and super reliable.”</div>
                    <div className="pt-5 fs-6">Onika P., Pingo rider </div>
                  </div>
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

                <div className="row pt-3">
                  <h1 className="fw-bold">
                    The whole cityin the palm of your hand.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Responsive.Mobile>
      </div>
    </LayoutPingo>
  )
}
