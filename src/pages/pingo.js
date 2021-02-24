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
import quote from "../images/quote.svg"
import car from "../images/car-illustration.png"
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

              <div className="row justify-content-center pingo-landing-page user-select-none">
                <img
                  className="img-fluid pingo-logo"
                  src={pingologowhite}
                  alt="Pingo Main logo"
                  width="650"
                  height="400"
                />
              </div>
              <div></div>
            </div>
          </div>

          <div className="section text-center">
            <div className="container">
              <div className="row g-0 ">
                <h2 className="fs-1 ">
                  The <u className="fw-bold">whole city</u> in
                </h2>
                <h2 className="fs-1 "> the palm of your hand.</h2>
              </div>
            </div>
          </div>

          <div id="download-pingo" className="section">
            <div className="container">
              <div className="row col-md-8">
                <h3 className="fs-1">Download</h3>
                <h3 className="fw-bold fs-1">Pingo Rider</h3>
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
              <hr />
              <div className="row col-md-8">
                <h3 className="fs-1">Download</h3>
                <h3 className="fw-bold fs-1">Pingo Driver</h3>
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
        <div className="section quotes bg-white shadow ">
          <div className="row g-0 pt-5 pt-md-0">
            <div className="col-md-2 wrap-illustration pt-5 pt-md-0">
              <img src={car} alt="Yellow Car" className="quotes-illustration" />
            </div>

            <div className="col-md-8 text-center pt-5 pt-md-0">
              <div className="row col-md-6 col-xxl-4 pt-5 pt-md-0">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card text-center bg-transparent border-0 pt-5 pt-md-0">
                        <img
                          className="card-img-top"
                          src={quote}
                          alt="Card cap"
                          width="100"
                          height="100"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Est tation latine aliquip id, mea ad tale illud
                            definitiones. Periculis omittantur reformidans
                            necessitatibus eum ad, pro eripuit minimum
                            comprehensam ne, usu cu stet prompta.
                          </p>
                          <h4 className="card-title">
                            Connie Robertson at Google
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card text-center bg-transparent border-0 pt-5 pt-md-0">
                        <img
                          className="card-img-top"
                          src={quote}
                          alt="Card cap"
                          width="100"
                          height="100"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Est tation latine aliquip id, mea ad tale illud
                            definitiones. Periculis omittantur reformidans
                            necessitatibus eum ad, pro eripuit minimum
                            comprehensam ne, usu cu stet prompta.
                          </p>
                          <h4 className="card-title">
                            Connie Robertson at Google
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card text-center bg-transparent border-0 pt-5 pt-md-0">
                        <img
                          className="card-img-top"
                          src={quote}
                          alt="Card cap"
                          width="100"
                          height="100"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Est tation latine aliquip id, mea ad tale illud
                            definitiones. Periculis omittantur reformidans
                            necessitatibus eum ad, pro eripuit minimum
                            comprehensam ne, usu cu stet prompta.
                          </p>
                          <h4 className="card-title">
                            Connie Robertson at Google
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-md-5">
          <div className="row">
            <Responsive.Desktop>
              <div className="col-md-4 wrap-illustration">
                <img
                  src={womanillustration}
                  alt="Woman Standing"
                  className="somewhere-illustration"
                />
              </div>
            </Responsive.Desktop>

            <Responsive.Mobile>
              <div className="col-md-4 wrap-illustration">
                <img
                  src={womanillustration}
                  alt="Woman Standing"
                  className="somewhere-illustration-mobile"
                  width="50%"
                />
              </div>
            </Responsive.Mobile>
          </div>
        </div>
      </div>
    </LayoutPingo>
  )
}
