import React from "react"
import LayoutPingo from "../components/LayoutPingo"

import Button from "@material-ui/core/Button"

import empty from "../images/img-empty.png"
import arrow from "../images/arrow.svg"
import quote from "../images/quote.svg"
import car from "../images/car-illustration.png"

import "../styles/pingo.css"

import pingologo from "../images/pingo.png"

export default function Pingo(props) {
  return (
    <LayoutPingo {...props}>
      <div id="pingo-page">
        <div id="pingo-header">
          <div className="row container pingo-landing-page">
            <div className="col justify-content-center pingo-logo">
              <img
                className=" img-fluid"
                src={pingologo}
                alt="Pingo Main logo"
              />
            </div>
          </div>
        </div>

        <div id="pingo-content">
          <div className="row container justify-content-left pl-0">
            <div className="col-md-8 pb-3">
              <h2>About Pingo</h2>
              <h2>Second information, why Pingo matters</h2>
            </div>
          </div>
          <div className="row container justify-content-left pl-0">
            <div className="col-md-6 pb-3">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </div>
          </div>
          <div className="row container pingo-buttons pl-0">
            <div className=" justify-content-left pt-3">
              <div className="action-buttons row pl-3">
                <div className="action-buttons pr-3">
                  <Button className="btn btn-action" variant="contained">
                    Primary Action
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn btn-action" variant="contained">
                    Secondary Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pingo-values">
          <div className="row container">
            <h2 className="col-md-12 text-center">
              Value proposition… aliquip id, mea ad tale illud definitiones.
              Periculis omittantur reformidans necessitatibus eum ad, pro
              eripuit minimum comprehensam ne, usu cu stet prompta.
            </h2>
          </div>
        </div>

        <div
          id="pingo-about"
          className="row container justify-content-left pingo-about-product"
        >
          <div className="row container justify-content-center">
            <div className="col-md-6">
              <img
                className="empty pt-5"
                src={empty}
                alt="Empty"
                width="350"
                height="350"
              />
            </div>
            <div className="col-md-6 py-5">
              <div className="about-pingo-title font-weight-bold pt-5">
                <h3>
                  About the product offered, noster postulant philosophia ea
                  usu, qui dicta sadipscing te.
                </h3>
              </div>
              <div className="about-text py-4">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </div>
            </div>
          </div>
        </div>

        <div id="pingo-arrow" className="row pingo-arrow">
          <div className="col-md-5 border-dark border-top border-bottom p-0 col-left">
            <div className="card col-md-6 team-description">
              <div className="card-body">
                <h4 className="card-title font-weight-bold pt-5">Advantages</h4>
                <p className="card-text">
                  Specialized in mobility-on-demand systems for high capacity
                  vehicles.
                </p>
              </div>
            </div>

            <div className="border border-dark border-right-0 border-left-0">
              <div className="card col-md-6 team-description  ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Advantages
                  </h4>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="card col-md-6 team-description ">
              <div className="card-body">
                <h4 className="card-title font-weight-bold pt-5">Advantages</h4>
                <p className="card-text">
                  Specialized in mobility-on-demand systems for high capacity
                  vehicles.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-2 border border-dark border-top-0 border-bottom-0">
            <div className="arrow-interaction text-center">
              <img src={arrow} alt="Arrow Interaction" />
            </div>
          </div>

          <div className="col-md-5 border-dark border-top border-bottom p-0 col-right">
            <div className="card col-md-6 team-description ">
              <div className="card-body">
                <h4 className="card-title font-weight-bold pt-5">Benefit 1</h4>
                <p className="card-text">
                  Specialized in mobility-on-demand systems for high capacity
                  vehicles.
                </p>
              </div>
            </div>

            <div className="border border-dark border-right-0 border-left-0">
              <div className="card col-md-6 team-description  ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Benefit 2
                  </h4>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="card col-md-6 team-description">
              <div className="card-body">
                <h4 className="card-title font-weight-bold pt-5">Benefit 3</h4>
                <p className="card-text">
                  Specialized in mobility-on-demand systems for high capacity
                  vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="pingo-trc">
          <div className="row container border border-dark">
            <div className="col-md-7 pb-5 border-right border-dark text-center">
              <img
                className="empty pt-5"
                src={empty}
                alt="Empty"
                width="450"
                height="450"
              />
            </div>
            <div className="col-md-5 py-5">
              <div className="row container">
                <h2 className="pt-5">We are part of</h2>
                <h2 className="font-weight-bold">The Routing Company</h2>
              </div>
              <div className="row container pr-3">
                <h6>
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te. Ex duo eripuit mentitum.
                </h6>
                <div className="action-buttons pr-3 pt-3">
                  <Button className="btn-black" variant="contained">
                    Primary Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pingo-backed">
          <div className="row container">Backed by the best</div>
        </div>

        <div id="pingo-quotes" className="row  quotes-content">
          <div className="col-md-4">
            <img src={car} alt="Yellow Car" />
          </div>

          <div className="col-md-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="pingo-quotes-illustration" className="row">
          <div className="col-md-4">
          <img src={car} alt="Yellow Car" />
          </div>
        </div> */}

        {/* <div id="pingo-quotes-illustration" className="row">
            <img src={car} alt="Yellow Car" />
          </div>
        </div> */}

        <div id="pingo-somewhere" className="row container">
          <div className="row col-md-6 justify-content-left pl-5">
            <h2 className="font-weight-bold">Pingo somewhere!</h2>
            <h2>See where we’re currently operating</h2>
            <h5>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </h5>
          </div>
        </div>
      </div>
    </LayoutPingo>
  )
}

{
  /* <div className="row container justify-content-center about-quotes p-5 col-md-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
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
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
