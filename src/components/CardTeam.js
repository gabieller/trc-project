import React from "react"
import Arrow from "./Arrow"
import Responsive from "../components/Responsive"

import james from "../images/james.jpg"
import menno from "../images/menno.jpg"
import thuan from "../images/thuan.jpg"
import alex from "../images/alex.jpg"
import bradford from "../images/bradford.jpg"
import daniela from "../images/daniela.jpg"
import uber from "../images/uber_logo.svg"
import canoo from "../images/canoo_logo.svg"
import smart from "../images/smart_logo.svg"
import tudelft from "../images/tudelft_logo.svg"

import "../styles/cardteam.css"

export default function CardTeam() {
  return (
    <div id="team-card">
      <Responsive.Desktop>
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-12 col-md-5 border border-dark col-left g-0">
              <div className="container flex-row card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top rounded-0"
                    src={james}
                    alt="James Cox"
                  />
                </div>
                <div className="card-body py-0 px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/jamescox00/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      James Cox
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>CEO</small>
                  </h6>
                  <div className="card-text">
                    Ridesharing industry leader who launched uberPOOL globally
                    from inception. Chief Product officer of Canoo.
                  </div>
                  <hr className="my-4" />
                  <img src={uber} alt="Uber Logo" className="img-logo-card" />
                  <img
                    src={canoo}
                    alt="Canoo Logo"
                    className="img-logo-card pt-3"
                  />
                </div>
              </div>
              <hr className="my-0" />

              <div className="container flex-row card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top rounded-0"
                    src={menno}
                    alt="Menno van der Zee"
                  />
                </div>

                <div className="card-body py-0 px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/mennovanderzee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      Menno van der Zee
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>Head of Global Business Development</small>
                  </h6>
                  <div className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </div>
                  <hr className="my-4" />
                  <img src={smart} alt="Smart Logo" className="img-logo-card" />
                  <img
                    src={tudelft}
                    alt="TU Delft Logo"
                    className="img-logo-card pt-2"
                  />
                </div>
              </div>
              <hr className="my-0" />

              <div className="container flex-row card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top  rounded-0"
                    src={thuan}
                    alt="Thuan Pham"
                  />
                </div>
                <div className="card-body px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/thuanqpham/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      Thuan Pham
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>Technology Advisor</small>
                  </h6>
                  <div className="card-text">
                    Previously the CTO of Uber and now the CTO of Coupang.
                  </div>
                  <hr className="my-4" />
                  <img
                    src={uber}
                    alt="Uber Logo"
                    className="img-logo-card py-4"
                  />
                </div>
              </div>
            </div>

            <Arrow />

            <div className="col-12 col-md-5 border border-dark col-right g-0">
              <div className="container d-flex flex-row-reverse card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top  rounded-0"
                    src={alex}
                    alt="Alex Wallar"
                  />
                </div>
                <div className="card-body px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/wallarelvo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      Alex Wallar
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>CTO</small>
                  </h6>
                  <div className="card-text">
                    Specialized in mathematical optimization for high-capacity
                    shared rides. Author of the seminal research on
                    high-capacity ride-sharing.
                  </div>
                  <hr className="my-4" />
                  <span className="fs-bold fs-4">MIT</span>
                </div>
              </div>

              <hr className="my-0" />

              <div className="container d-flex flex-row-reverse card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top  rounded-0"
                    src={bradford}
                    alt="Bradford Church"
                  />
                </div>
                <div className="card-body px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/bradford-church/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      Bradford Church
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>Director of Product</small>
                  </h6>
                  <div className="card-text">
                    Ridesharing veteran and product expert who launched uberBUS
                    globally.
                  </div>
                  <hr className="my-4" />
                  <img
                    src={uber}
                    alt="Uber Logo"
                    className="img-logo-card py-4"
                  />
                </div>
              </div>

              <hr className="my-0" />

              <div className="container d-flex flex-row-reverse card border-0">
                <div className="col-6">
                  <img
                    className="card-img-top  rounded-0"
                    src={daniela}
                    alt="Daniela Rus"
                  />
                </div>
                <div className="card-body px-5">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/daniela-rus-220b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      Daniela Rus
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>Technology Advisor</small>
                  </h6>
                  <div className="card-text">
                    Deputy Dean of Research, Schwarzman College of Computing at
                    MIT.
                  </div>
                  <hr className="my-4" />
                  <span className="fs-bold fs-4">MIT CSAIL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Responsive.Desktop>

      <Responsive.Mobile>
        <div className="container-fluid">
          <div className="card-mobile border-top border-bottom border-dark rounded-0">
            <div className="d-flex flex-row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-mobile rounded-0"
                  src={james}
                  alt="James Cox"
                />
              </div>

              <div className=" col-7">
                <div className="card-body">
                  <h5 className="card-title pt-3">
                    <a
                      href="https://www.linkedin.com/in/jamescox00/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fw-bold"
                    >
                      James Cox
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark">
                    <small>CEO</small>
                  </h6>
                  <div className="card-text">
                    Ridesharing industry leader who launched uberPOOL globally
                    from inception. Chief Product officer of Canoo.
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex flex-row justify-content-around">
                    <img
                      src={uber}
                      alt="Uber Logo"
                      className="img-logo-card py-4"
                      width="48"
                    />
                    <img
                      src={canoo}
                      alt="Canoo Logo"
                      className="img-logo-card py-4"
                      width="146"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-mobile rounded-0">
            <div className="row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-top rounded-0"
                  src={alex}
                  alt="Alex Wallar"
                />
              </div>
              <div className="card-body col-7">
                <h5 className="card-title pt-3">
                  <a
                    href="https://www.linkedin.com/in/wallarelvo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Alex Wallar
                  </a>
                </h5>
                <h6 className="card-subtitle mb-3 text-dark">
                  <small>CTO</small>
                </h6>
                <div className="card-text">
                  Specialized in mathematical optimization for high-capacity
                  shared rides. Author of the seminal research on high-capacity
                  ride-sharing.
                </div>
                <hr className="my-4" />
                <span className="fs-bold fs-3">MIT</span>
              </div>
            </div>
          </div>

          <div className="card-mobile border-top border-bottom border-dark rounded-0">
            <div className="row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-top rounded-0"
                  src={menno}
                  alt="Menno van der Zee"
                />
              </div>
              <div className="card-body col-7">
                <h5 className="card-title pt-3">
                  <a
                    href="https://www.linkedin.com/in/mennovanderzee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Menno van der Zee
                  </a>
                </h5>
                <h6 className="card-subtitle mb-3 text-dark">
                  <small>Head of Global Business Development</small>
                </h6>
                <div className="card-text">
                  Specialized in mobility-on-demand systems for high capacity
                  vehicles.
                </div>
                <hr className="my-4" />

                <div className="d-flex flex-row justify-content-between">
                  <img
                    src={smart}
                    alt="Smart Logo"
                    className="img-logo-card pt-3"
                  />
                  <img
                    src={tudelft}
                    alt="TU Delft Logo"
                    className="img-logo-card"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-mobile  rounded-0">
            <div className="row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-top rounded-0"
                  src={bradford}
                  alt="Bradford Church"
                />
              </div>
              <div className="card-body col-7">
                <h5 className="card-title pt-3">
                  <a
                    href="https://www.linkedin.com/in/bradford-church/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Bradford Church
                  </a>
                </h5>
                <h6 className="card-subtitle mb-3 text-dark">
                  <small>Director of Product</small>
                </h6>
                <div className="card-text">
                  Ridesharing veteran and product expert who launched uberBUS
                  globally.
                </div>
                <hr className="my-4" />
                <img
                  src={uber}
                  alt="Uber Logo"
                  className="img-logo-card py-4"
                />
              </div>
            </div>
          </div>

          <div className="card-mobile border-top border-bottom border-dark rounded-0">
            <div className="row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-top rounded-0"
                  src={thuan}
                  alt="Thuan Pham"
                />
              </div>
              <div className="card-body col-7">
                <h5 className="card-title pt-3">
                  <a
                    href="https://www.linkedin.com/in/thuanqpham/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Thuan Pham
                  </a>
                </h5>
                <h6 className="card-subtitle mb-3 text-dark">
                  <small>Technology Advisor</small>
                </h6>
                <div className="card-text">
                  Previously the CTO of Uber and now the CTO of Coupang.
                </div>
                <hr className="my-4" />
                <img
                  src={uber}
                  alt="Uber Logo"
                  className="img-logo-card py-4"
                />
              </div>
            </div>
          </div>

          <div className="card-mobile  border-bottom border-dark  rounded-0">
            <div className="row">
              <div className="col-5 g-0 card-pic">
                <img
                  className="card-img-top rounded-0"
                  src={daniela}
                  alt="Daniela Rus"
                />
              </div>
              <div className="card-body col-7">
                <h5 className="card-title pt-3">
                  <a
                    href="https://www.linkedin.com/in/daniela-rus-220b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Daniela Rus
                  </a>
                </h5>
                <h6 className="card-subtitle mb-3 text-dark">
                  <small>Technology Advisor</small>
                </h6>
                <div className="card-text">
                  Deputy Dean of Research, Schwarzman College of Computing at
                  MIT.
                </div>
                <hr className="my-4" />
                <span className="fs-bold fs-5">MIT CSAIL</span>
              </div>
            </div>
          </div>
        </div>
      </Responsive.Mobile>
    </div>
  )
}
