import React from "react"
import LayoutPingo from "../components/LayoutPingo"
import DownloadButtons from "../components/DownloadButtons"

import Button from "@material-ui/core/Button"

import pingologowhite from "../images/pingologowhite.png"
import empty from "../images/img-empty.png"
import arrow from "../images/arrow.svg"
import quote from "../images/quote.svg"
import car from "../images/car-illustration.png"
import buttonpingo1 from "../images/buttonpingo1.svg"
import buttonpingo2 from "../images/buttonpingo2.svg"
import womanillustration from "../images/woman-illustration.png"

import "../styles/pingo.css"

export default function Pingo(props) {
  return (
    <LayoutPingo {...props}>
      <div id="pingo-page">
        <div id="pingo-header">
          <div className="row container  pingo-landing-page">
            <div className="col-md-8 text-center pingo-logo">
              <img
                className=" img-fluid"
                src={pingologowhite}
                alt="Pingo Main logo"
                width="650"
                height="400"
              />
            </div>
            <div className="col-md-4 pt-2 subtitle text-left">
              <h3 className="font-weight-bold pt-3">Transit</h3>
              <h3 className="font-weight-bold">that moves</h3>
              <h3 className="font-weight-bold">with you.</h3>
            </div>
          </div>
        </div>

        <div id="pingo-content" className="row container">
          <div className="col-md-8">
            <div className="pingo-title">
              <h2>Get Pingo</h2>
              <h2>Reason placeholder why Pingo matters</h2>
            </div>
            <div>
              <div className="d-inline-flex action-button justify-content-left">
                <div className="action-buttons pr-3">
                  <Button className="btn btn-action pl-0">
                    <img src={buttonpingo1} alt="Pingo Button" />
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn btn-action">
                    <img src={buttonpingo2} alt="Pingo Button" />
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

        <div id="pingo-quotes" className="row">
          <div className="col-md-4 quotes-illustration">
            <img src={car} alt="Yellow Car" />
          </div>

          <div className="col-md-5 text-center quotes-content mx-0">
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

        <div id="pingo-somewhere">
          <div className="col-md-8 justify-content-left text pt-5">
            <div className="title">
              <h2 className="font-weight-bold">Pingo somewhere!</h2>
              <h2>See where we’re currently operating</h2>
            </div>
            <div className="col-md-7 text-body px-0 pt-5">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </div>
            <div className="col-md-6 find-pingo-illustration">
              <img src={womanillustration} alt="Woman Standing" />
            </div>
          </div>

          <div className="col-md-4 find-pingo pt-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="| Enter City"
                aria-label="| Enter City"
              />
              <div className="input-group-append">
                <Button className="btn-black" variant="contained">
                  SEARCH CITY
                </Button>
              </div>
            </div>
            <h6 className="warning-text">
              By clicking “Primary action” you accepting ipsum dolor sit amet,
              sit ea brute mediocritatem, eu sed aliquam scripserit dissentiunt.
            </h6>
          </div>
        </div>

        <div id="download-pingo">
          <div className="col-md-6 justify-content-left text pt-5">
            <div className="title">
              <h2>
                Download pingo, lucilius noster postulant philosophia ea usu,
                qui dicta sadipscing te.
              </h2>
            </div>
            <div className="col-md-10 text-body px-0 pt-3">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </div>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </LayoutPingo>
  )
}
