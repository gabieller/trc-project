import React from "react"
import Button from "@material-ui/core/Button"
import LayoutPingo from "../components/LayoutPingo"
import Responsive from "../components/Responsive"
import Arrow from "../components/Arrow"
import NavBarPingo from "../components/NavBarPingo"
import CanvasPingo from "../components/CanvasPingo"
import pingologowhite from "../images/pingologowhite.png"
import pingo_mockup from "../images/pingo_mockup.png"
// import arrow from "../images/arrow.svg"
import mockup from "../images/mockup.png"
import quote from "../images/quote.svg"
import car from "../images/car-illustration.png"
import pingo_register from "../images/pingo_register.svg"
import pingo_register2 from "../images/pingo_register2.svg"
import pingo_ride from "../images/pingo_ride.svg"
import pingo_ride2 from "../images/pingo_ride2.svg"
import womanillustration from "../images/woman-illustration.png"

import "../styles/pingo.css"

//TODO: fix header to mobile and desktop

export default function Pingo(props) {
  return (
    <LayoutPingo {...props}>
      <div id="pingo-page" className="container-fluid">
        {/* <Responsive.Desktop> */}
        <div id="pingo-header">
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <CanvasPingo />
          </div>
          <div className="container">
            <div className="row justify-content-center pingo-landing-page">
              <img
                className="img-fluid pingo-logo"
                src={pingologowhite}
                alt="Pingo Main logo"
                width="650"
                height="400"
              />
            </div>
            <NavBarPingo />
          </div>
        </div>

        <div id="pingo-content" className="row container">
          <div className="col-sm-10">
            <div className="pingo-title">
              <h2>The whole cityin the palm of your hand.</h2>
              <h2> Get Pingo</h2>
            </div>
            <div>
              <div className="d-inline-flex action-button justify-content-left pt-4">
                <div className="action-buttons pr-3">
                  <Button className="btn btn-action pl-0">
                    <img src={pingo_register} alt="Pingo Button" />
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn btn-action">
                    <img src={pingo_ride} alt="Pingo Button" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="pingo-about"
          className="row container justify-content-left pingo-about-product"
        >
          <div className="row container justify-content-center">
            <div className="col-md-6">
              <img
                className="pt-5"
                src={pingo_mockup}
                alt="Pingo Mockup"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 py-5">
              <div className="about-pingo-title font-weight-bold pt-5">
                <h3>
                  About the product offered, visualization areaea usu, qui dicta
                  sadipscing te.
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

        <Responsive.Desktop>
          <div className="section pingo-lines">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-5 border border-dark col-left">
                  <div className="container card pingo-cards px-5">
                    <div className="card-body py-5">
                      <h4 className="card-title font-weight-bold">
                        Advantages
                      </h4>
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
                      <h4 className="card-title font-weight-bold">
                        Advantages
                      </h4>
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
                      <h4 className="card-title font-weight-bold">
                        Advantages
                      </h4>
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
                      <h4 className="card-title font-weight-bold">Features</h4>
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
                      <h4 className="card-title font-weight-bold">Features</h4>
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
                      <h4 className="card-title font-weight-bold">Features</h4>
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
                <div className="col-md-6 py-5 no-gutters">
                  <div className="row col-md-9">
                    <h3 className="pt-5">We are part of</h3>
                    <h3 className="font-weight-bold">The Routing Company</h3>
                  </div>
                  <div className="row  col-md-9">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te. Ex duo eripuit mentitum.
                    <div className="action-buttons pr-3 py-3">
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
          <div className="section pingo-lines">
            <div className="row no-gutters justify-content-center">
              <div className="col-10 border-top border border-dark col-left mb-5 mx-4">
                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title font-weight-bold">Advantages</h4>
                    <p className="card-text ">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs. Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title font-weight-bold">Advantages</h4>
                    <p className="card-text ">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs. Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title font-weight-bold">Advantages</h4>
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
                    <h4 className="card-title font-weight-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards">
                  <div className="card-body py-5">
                    <h4 className="card-title font-weight-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>

                <div className="container card pingo-cards pb-5">
                  <div className="card-body py-5">
                    <h4 className="card-title font-weight-bold">Features</h4>
                    <p className="card-text">
                      It’s not easy to build an efficient pooling product.
                      Reduce engineering costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pingo-trc">
            <div className="row  bg-white">
              <div className="col-md-6 text-center">
                <img src={mockup} alt="Mockup" width="100%" height="100%" />
              </div>
              <div className="col-md-6 py-5 no-gutters">
                <div className="row col-md-9">
                  <h3 className="pt-5">We are part of</h3>
                  <h3 className="font-weight-bold">The Routing Company</h3>
                </div>
                <div className="row  col-md-9">
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te. Ex duo eripuit mentitum.
                  <div className="action-buttons pr-3 py-3">
                    <Button className="btn-black" variant="contained">
                      See our technologies
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Responsive.Mobile>

        <div className="section quotes bg-white ">
            <div className="row no-gutters">
              <div className="col-md-3 wrap-illustration ">
                <img src={car} alt="Yellow Car" className="quotes-illustration" />
              </div>

              <div className="col-md-7 text-center">
              <div className="row col-md-6 justify-content-center">
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
                      <div className="card text-center bg-transparent border-0">
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
                      <div className="card text-center bg-transparent border-0 w-50">
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
                      <div className="card text-center bg-transparent border-0">
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
        {/* </Responsive.Desktop> */}

        {/* <Responsive.Mobile>
          <div id="header-mobile">
            <div className="row container justify-content-center pingo-landing-page">
              <img
                className="img-fluid"
                src={pingologowhite}
                alt="Pingo Main logo"
                width="100%"
                height="100%"
              />
              <h3 className="mobile-subtitle font-weight-bold pt-5 pl-3">
                The whole city in the palm of your hand.
              </h3>
              <div className="action-button justify-content-left pt-4">
                <div className="action-buttons pr-3">
                  <Button className="btn btn-action pl-4">
                    <img src={pingo_register} alt="Pingo Button" />
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn btn-action">
                    <img src={pingo_ride} alt="Pingo Button" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center pt-3 mockup-mobile pb-4">
              <img
                src={pingo_mockup}
                alt="Mockup Mobile"
                width="130%"
                height="145%"
              />
            </div>
          </div>
          <div id="about-mobile">
            <div className="row-container">
              <div className="col-10 justify-content-left py-5 pl-5">
                <h4 className="pb-2">
                  About the product offered, areaea usu, quipscing te.
                </h4>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te.
              </div>
            </div>
            <div className="row container flex-column px-4 pb-5 advantages-column">
              <div className="border border-dark px-5 pt-5">
                <div className="pb-5">
                  <h4 className="pb-3">Advantages 1</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
                <div className="pb-5">
                  <h4 className="pb-3">Advantages 2</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
                <div className="pb-5">
                  <h4 className="pb-3">Advantages 3</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
              </div>
            </div>

            <div className="row container flex-column px-4 pb-5 features-column">
              <div className="border border-dark px-5 pt-5">
                <div className="pb-5">
                  <h4 className="pb-3">Feature 1</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
                <div className="pb-5">
                  <h4 className="pb-3">Feature 2</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
                <div className="pb-5">
                  <h4 className="pb-3">Feature 3</h4>
                  It’s not easy to build an efficient pooling product. Reduce
                  engineering costs.
                </div>
              </div>
            </div>
          </div>

          <div id="pingo-trc-mobile">
            <div className="border border-dark">
              <img src={mockup} alt="Mockup TRC" weight="120%" height="120%" />
              <div className="row container pl-4 py-5">
                <h3>We are part of</h3>
                <h3 className="font-weight-bold pb-3">The Routing Company</h3>
                <div className="col-10 pb-4">
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te.
                </div>
                <Button className="btn-black" variant="contained">
                  See our technologies
                </Button>
              </div>
              <div className="col-md-4 car-illustration">
                <img src={car} alt="Yellow Car" width="130%" height="100%" />
              </div>
            </div>
          </div>

          <div id="pingo-quotes" className="row">
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
        </Responsive.Mobile> */}

        <div id="pingo-somewhere">
          <div className="col-md-8 justify-content-left text pt-5">
            <div className="title">
              <h3 className="font-weight-bold">Pingo somewhere!</h3>
              <h3>See where we’re currently operating</h3>
            </div>
            <div className="col-md-7 text-body px-0 pt-5">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </div>
            <div className="col-md-6 find-pingo-illustration">
              <img
                src={womanillustration}
                alt="Woman Standing"
                width="100%"
                height="100%"
              />
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
              <h2>Are you curious to know more? Get Pingo sentence</h2>
            </div>
          </div>
          <div className="d-inline-flex action-button justify-content-left pt-4">
            <div className="action-buttons pr-3">
              <Button className="btn btn-action pl-0">
                <img src={pingo_register2} alt="Pingo Button" />
              </Button>
            </div>
            <div className="action-buttons">
              <Button className="btn btn-action">
                <img src={pingo_ride2} alt="Pingo Button" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPingo>
  )
}
