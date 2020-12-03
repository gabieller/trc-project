import React from "react"
import LayoutPingo from "../components/LayoutPingo"

import Button from "@material-ui/core/Button"

import empty from "../images/img-empty.png"
import suitcase from "../images/suitcase.svg"
import key from "../images/key.svg"
import cube from "../images/cube.svg"
import truck from "../images/truck.svg"

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

        <div id="pingo-about">
          <div className="row container justify-content-left">
            <div className="col-md-6">
              <h2>What we do and why it matters</h2>
            </div>
          </div>
          <div className="row container justify-content-left">
            <div className="col-md-8">
              Our team is happy to answer all your questions. Please, fill out
              the form and we’ll be in touch as soon as possible.
            </div>
            <div className="row container justify-content-center">
              <div className="col-md-6">
                <img
                  className="empty pt-5"
                  src={empty}
                  alt="Empty"
                  width="100%"
                  height="100%"
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
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te. Ex duo eripuit mentitum.
                </div>
              </div>
            </div>
          </div>

          <div className="row container justify-content-center">
            <div className="col-md-6 img-about">
              <img
                className="empty-about py-5"
                src={empty}
                alt="Products"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 about pt-5">
              <div className="row pt-5">
                <div className="col-md-6">
                  <img
                    className="about-img pb-3"
                    src={suitcase}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={key}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={cube}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={truck}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPingo>
  )
}
