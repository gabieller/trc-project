import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Newsletter from "../components/Newsletter"

import newsletterimage from "../images/newsletterimage.png"
import menno from "../images/menno-pic.png"
import arrow from "../images/arrow.svg"

import "../styles/about.css"

export default function About(props) {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Layout {...props}>
      <div id="about-page">
        <div id="about-header">
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

        <div id="about-team" className="row about-line">
          <div className="col-md-5 border border-dark border-top border-bottom p-0 col-left ">
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno" width="250" height="250" />
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
                <img src={menno} alt="Menno" width="250" height="250" />
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
                <img src={menno} alt="Menno" width="250" height="250" />
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
              <div className="progressMainWrapper">
                <div className="progressMainStyle">
                  <img
                    src={arrow}
                    alt="Arrow Interaction"
                    height={`${scrollTop}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 border-dark border-top border-bottom p-0 col-right">
            <div className="d-inline-flex">
              <div className="col-md-6 team-picture py-5">
                <img src={menno} alt="Menno" width="250" height="250" />
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
                <img src={menno} alt="Menno" width="250" height="250" />
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
                <img src={menno} alt="Menno" width="250" height="250" />
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

        <div id="newsletter-section">
          <div className="row container justify-content-center newsletter">
            <div className="row container pt-5 ">
              <h2 className="col-md-12 text-center pb-5">
                We build smart, sustainable transit solutions that are more
                reliable and accessible than other mobility options. Our
                MIT-born routing technology has been hailed as a striking
                example of the potential around ridesharing.
              </h2>
            </div>
            <div className="row  border border-dark bg-white ">
              <div className="col-md-5 px-0">
                <img
                  src={newsletterimage}
                  alt="Newsletter"
                  width="450"
                  height="550"
                />
              </div>
              <div className="col-md-7 px-5 newsletter-box">
                <Newsletter />

                <div className="warning-text">
                  <h6>
                    By clicking “Primary action” you accepting ipsum dolor sit
                    amet, sit ea brute mediocritatem, eu sed aliquam scripserit
                    dissentiunt.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
