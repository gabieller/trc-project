import React, { useRef } from "react"
import { Link } from "gatsby"

import Button from "@material-ui/core/Button"
import LayoutPingo from "../components/LayoutPingo"
import Responsive from "../components/Responsive"
import Autocomplete from "../components/AutoComplete"
import Arrow from "../components/Arrow"
import NavBarPingo from "../components/NavBarPingo"
import CanvasPingo from "../components/CanvasPingo"

import trclogo from "../images/trc-logo-black.png"
import arrowright from "../images/arrow-right-black.svg"
import arrowrightmobile from "../images/arrow-right-black-mobile.svg"

import pingologowhite from "../images/pingologowhite.png"
import pingo_mockup from "../images/pingo_mockup.png"
import mockup from "../images/mockup.jpg"
import quote from "../images/quote.svg"
import car from "../images/car-illustration.png"
import pingo_register from "../images/pingo_register.svg"
import pingo_register2 from "../images/pingo_register2.svg"
import pingo_ride from "../images/pingo_ride.svg"
import pingo_ride2 from "../images/pingo_ride2.svg"
import womanillustration from "../images/woman-illustration.png"
import "../styles/pingo.css"

const navbarItems = [
  { name: "GET PINGO", url: "pingo-content" },
  { name: "WHY IT'S GOOD", url: "pingo-about" },
  { name: "WHERE", url: "pingo-somewhere" },
  { name: "DOWNLOAD", url: "download-pingo" },
]

//TODO: fix header to mobile and desktop
export default function Pingo(props) {
  const selected = navbarItems.findIndex(
    ({ url }) => url === props.location?.hash?.replace("#", "")
  )

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
              <div>
                <NavBarPingo tabs={navbarItems} selected={selected} />
              </div>
            </div>
          </div>

          <div id={navbarItems[0].url} className="section title ">
            <div className="container">
              <div className="row g-0">
                <div className="row g-0">
                  <h1>The whole cityin the palm of your hand.</h1>
                  <h1> Get Pingo</h1>
                </div>
                <div className="row g-0">
                  <div className="d-md-inline-flex action-button  pt-4">
                    <div>
                      <button className="btn btn-action">
                        <img src={pingo_register} alt="Pingo Button" />
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-action">
                        <img src={pingo_ride} alt="Pingo Button" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id={navbarItems[1].url} className="section-mini about">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-6 me-5">
                  <img src={pingo_mockup} alt="Pingo Mockup" width="100%" />
                </div>
                <div className="col-md-4 mx-md-5 px-4 px-md-0 pt-5 pt-md-0">
                  <h3>
                    About the product offered, visualization areaea usu, qui
                    dicta sadipscing te.
                  </h3>
                  <div>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te. Ex duo eripuit mentitum.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-mini pingo-lines">
            <div className="container-fluid container-xxl">
              <div className="row g-0">
                <div className="col-md-5 border border-dark col-left">
                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Advantages</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Advantages</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Advantages</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                </div>

                <Arrow />

                <div className="col-md-5 border border-dark col-right">
                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Features</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Features</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="container card pingo-cards px-5 pb-5">
                    <div className="card-body py-5">
                      <h4 className="card-title fw-bold">Features</h4>
                      <p className="card-text w-75">
                        Specialized in mobility-on-demand systems for high
                        capacity vehicles. Et has minim elitr intellegat. Mea
                        aeterno eleifend antiopam ad, nam no suscipit
                        quaerendum. At nam minimum ponderum. Est audiam animal
                        molestiae te. Ex duo eripuit mentitum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section pingo-trc">
            <div className="container">
              <div className="row border border-dark bg-white">
                <div className="col-md-6 text-center border-right border-dark">
                  <img src={mockup} alt="Mockup" width="100%" height="100%" />
                </div>
                <div className="col-md-6 py-5 g-0">
                  <div className="row col-md-9">
                    <h3 className="pt-5">We are part of</h3>
                    <h3 className="fw-bold">The Routing Company</h3>
                  </div>
                  <div className="row  col-md-9">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te. Ex duo eripuit mentitum.
                    <div className="action-buttons pe-3 py-3">
                      <Button className="btn-black" variant="contained">
                        See our technologies
                      </Button>
                    </div>
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
                <div className="row pt-3 pb-5">
                  <Button className="btn btn-action">
                    <img src={pingo_register} alt="Pingo Button" />
                  </Button>
                  <Button className="btn btn-action">
                    <img src={pingo_ride} alt="Pingo Button" />
                  </Button>
                </div>
                <div className="row">
                  <img src={pingo_mockup} alt="Pingo Mockup" width="100%" />
                </div>
              </div>
            </div>
          </div>

          <div id="about-mobile" className="section-mini px-4">
            <div className="container">
              <div className="row g-0">
                <h3>
                  About the product offered, visualization areaea usu, qui dicta
                  sadipscing te.
                </h3>
              </div>
              <div className="row g-0">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </div>
            </div>
          </div>
          <div className="pingo-lines">
            <div className="row g-0 justify-content-center">
              <div className="col-10 border-top border border-dark col-left mb-5 mx-4">
                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Advantages</h4>
                    <p className="card-text ">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs. Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Advantages</h4>
                    <p className="card-text ">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs. Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Advantages</h4>
                    <p className="card-text ">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs. Reduce engineering costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-10 border-top border border-dark col-left mb-5 mx-4">
                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards pb-5">
                  <div className="card-body py-5">
                    <h4 className="card-title fw-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pingo-trc bg-white px-4">
            <div className="container">
              <div className="row">
                <div>
                  <img src={mockup} alt="Mockup" width="100%" />
                </div>
                <div className="py-5 g-0">
                  <div>
                    <h3>We are part of</h3>
                    <h3 className="fw-bold">The Routing Company</h3>
                  </div>
                  <div>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te. Ex duo eripuit mentitum.
                  </div>
                  <div className="action-buttons pe-3 py-3">
                    <Button className="btn-black" variant="contained">
                      See our technologies
                    </Button>
                  </div>
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

        <div id={navbarItems[2].url} className="section somewhere">
          <div className="container pt-md-5">
            <div className="row">
              <div className="col-md-8 g-0">
                <div className="row">
                  <h3 className="fw-bolder">Pingo somewhere!</h3>
                  <h3>See where we’re currently operating</h3>
                  <div className="col-md-7 pt-md-5 pt-3">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te. Ex duo eripuit mentitum.
                  </div>

                  <div className="col-md-7 pt-4">
                    <Autocomplete />
                  </div>
                </div>
              </div>

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

        <div id={navbarItems[3].url} className="section download">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Are you curious to know more? </h2>
                <h2>Get Pingo sentence</h2>
              </div>
              <div className="d-md-inline-flex action-button pt-5 g-0">
                <div className="action-buttons">
                  <button className="btn btn-action">
                    <img src={pingo_register2} alt="Pingo Button" />
                  </button>
                </div>
                <div className="action-buttons">
                  <button className="btn btn-action">
                    <img src={pingo_ride2} alt="Pingo Button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPingo>
  )
}
