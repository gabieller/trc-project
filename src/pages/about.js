import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import empty from "../images/img-empty.png"
import menno from "../images/menno-pic.png"
import arrow from "../images/arrow.svg"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about-page">
        <div id="about-page-first">
          <div className="row container about-title">
            <div className="col-md-8 justify-content-left about-title pt-5">
              <h2>
                A world-class team focused on solving transportation problems
              </h2>
            </div>
          </div>
          <div className="row container about-subtitle">
            <div className="col-md-6 col-sm-12 justify-content-left pt-3">
              <h4>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h4>
            </div>
          </div>
        </div>

        <div id="about-page-second" className="row about-line">
          <div className="col-md-5 border border-dark border-top border-bottom p-0 col-left ">
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-inline-flex border border-dark border-right-0 border-left-0">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 border border-dark border-top-0 border-bottom-0">
            <div className="arrow-interaction text-center">
            <img src={arrow} alt="Arrow Interaction" />
            </div>
          </div>

          <div className="col-md-5 border-dark border-top border-bottom p-0 col-right">
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-inline-flex d-inline-flex border border-dark border-right-0 border-left-0">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno Picture" width="250" height="250" />
              </div>
              <div className="card col-md-6 team-description bg-white ">
                <div className="card-body">
                  <h4 className="card-title font-weight-bold pt-5">
                    Menno van der Zee
                  </h4>
                  <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                  <p className="card-text">
                    Specialized in mobility-on-demand systems for high capacity
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about-page-third">
          <div className="row container ">
            <h2 className="col-md-12 text-center">
              We build smart, sustainable transit solutions that are more
              reliable and accessible than other mobility options. Our MIT-born
              routing technology has been hailed as a striking example of the
              potential around ridesharing.
            </h2>
          </div>
        </div>

        <div id="about-page-fourth">
          <div className="row container justify-content-center newsletter">
            <div className="col-md-6">
              <img
                className="empty pt-5"
                src={empty}
                alt="Newsletter Image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 py-5">
              <div className="newsletter-title font-weight-bold pt-5">
                <h2>Follow our latest news</h2>
                <h2>Sign up for our newsletter</h2>
              </div>
              <div className="newsletter-text py-4">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="| Enter your email"
                  aria-label="| Enter your email"
                />
                <div className="input-group-append">
                  <Button className="btn-black" variant="contained">
                    Primary Action
                  </Button>
                </div>
              </div>
              <h5 className="warning-text">
                By clicking “Primary action” you accepting ipsum dolor sit amet,
                sit ea brute mediocritatem, eu sed aliquam scripserit
                dissentiunt.
              </h5>
            </div>
          </div>
        </div>
        <div id="contact-us" className="pl-5">
          <div className="row container contact-us-title pl-0">
            <div className="col-md-6 justify-content-left contact-us-title pb-3">
              <h2>Ad eos saepe lucilius, noster postulant philosophia.</h2>
            </div>
          </div>
          <div className="row container contact-us-subtitle pl-0">
            <div className="col-md-6 col-sm-12 justify-content-left">
              <h4>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </h4>
            </div>
          </div>
          <div className="row container contact-us-buttons pl-0">
            <div className=" justify-content-left pt-3">
              <div className="action-buttons row pl-3">
                <div className="action-buttons pr-3">
                  <Button className="btn-black btn-action" variant="contained">
                    Primary Action
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn-white btn-action" variant="contained">
                    Secondary Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
