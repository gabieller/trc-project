import React, { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"
import Demo from "../components/Demo"
import Newsletter from "../components/Newsletter"

import newsletterimage from "../images/newsletterimage.png"
import menno from "../images/menno-pic.png"
import uber from "../images/uber.svg"

import "../styles/about.css"

export default function About(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  })

  const [percentage, setPercentage] = useState(0)
  const [showArrow, setShowArrow] = useState(false)
  const selectedDiv = useRef(null)

  const onScroll = () => {
    const { scrollTop } = document.documentElement
    const { scrollHeight, offsetTop } = selectedDiv.current
    const bottomGoal = scrollHeight / 2 + offsetTop
    const newValue = (scrollTop / bottomGoal) * 100
    setPercentage(newValue >= 100 ? 100 : newValue)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const checkArrow = () => {
    if (!showArrow && window.pageYOffset > 0) {
      setShowArrow(true)
    } else {
      setShowArrow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkArrow)
    return () => {
      window.removeEventListener("scroll", checkArrow)
    }
  }, [])

  return (
    <div>
        <Layout {...props}>
        {isDesktopOrLaptop && (
          <>
            <div id="about-page" className="container-fluid">
              <div className="section title justify-content-left pl-md-5 pl-xs-0">
                <div className="row container justify-content-left pl-5 pt-5">
                  <div className="col-md-6 col-xs-8">
                    <h2>
                      A world-class team focused on solving transportation
                      problems
                    </h2>
                  </div>
                </div>
                <div className="row container justify-content-left pl-5 pt-2">
                  <div className="col-md-5">
                    We are a team of builders from technology, transportation,
                    academia and public policy with a passion for helping cities
                    unlock transit’s full potential.
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-2 border border-dark border-top-0 border-bottom-0 justify-content-center d-flex"
                  ref={selectedDiv}
                >
                  <div
                    className="arrow2"
                    style={{ height: `calc(0px + ${percentage}%)` }}
                  >
                    <div
                      className={`line1 ${showArrow ? "visible" : "invisible"}`}
                      style={{ top: `calc(0px + ${percentage}%)` }}
                    />
                    <div
                      className={`line2 ${showArrow ? "visible" : "invisible"}`}
                      style={{ top: `calc(0px + ${percentage}%)` }}
                    />
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
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
                          Specialized in mobility-on-demand systems for high
                          capacity vehicles.
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
                      We build smart, sustainable transit solutions that are
                      more reliable and accessible than other mobility options.
                      Our MIT-born routing technology has been hailed as a
                      striking example of the potential around ridesharing.
                    </h2>
                  </div>
                  <div className="row border border-dark bg-white">
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
                          By clicking “Primary action” you accepting ipsum dolor
                          sit amet, sit ea brute mediocritatem, eu sed aliquam
                          scripserit dissentiunt.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Demo />
            </div>
          </>
        )}

        {isTabletOrMobileDevice && (
          <>
            <div id="about-page">
              <div className="section title justify-content-left pl-md-5 pl-xs-0">
                <div className="row container justify-content-left pl-5 pt-5">
                  <div className="col-md-6 col-xs-8">
                    <h2>
                      A world-class team focused on solving transportation
                      problems
                    </h2>
                  </div>
                </div>
                <div className="row container justify-content-left pl-5 pt-2">
                  <div className="col-md-5">
                    We are a team of builders from technology, transportation,
                    academia and public policy with a passion for helping cities
                    unlock transit’s full potential.
                  </div>
                </div>
              </div>

              <div id="about-team" className="pl-4">
                <div className="col-md-6 team-picture pt-5">
                  <img src={menno} alt="Menno" width="200" height="190" />
                  <div className="linkedin-link pt-4">
                    linkedin.com/in/mennovanderzee/
                  </div>
                </div>
                <div className="card col-md-6 team-description bg-white px-0">
                  <div className="card-body px-1">
                    <h4 className="card-title font-weight-bold">
                      Menno van der Zee
                    </h4>
                    <h5 className="card-subtitle mb-2 pb-3">Co-Founder</h5>
                    <div className="card-text col-xs-4">
                      Specialized in mobility-on-demand systems for high
                      capacity vehicles.
                    </div>
                    <Button className="btn btn-action pt-3">
                      <img src={uber} alt="Uber Button" />
                    </Button>
                  </div>
                </div>
              </div>

              <div id="newsletter-section">
                <div className="row container justify-content-center newsletter">
                  <div className="row container pt-5 ">
                    <h2 className="col-md-12 text-center pb-5">
                      We build smart, sustainable transit solutions that are
                      more reliable and accessible than other mobility options.
                      Our MIT-born routing technology has been hailed as a
                      striking example of the potential around ridesharing.
                    </h2>
                  </div>
                  <div className="row border border-dark bg-white">
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
                          By clicking “Primary action” you accepting ipsum dolor
                          sit amet, sit ea brute mediocritatem, eu sed aliquam
                          scripserit dissentiunt.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Demo />
            </div>
          </>
        )}
    </Layout>
      </div>
  )
}
