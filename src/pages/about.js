import React, { useEffect, useState, useRef } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Newsletter from "../components/Newsletter"

import newsletterimage from "../images/newsletterimage.png"
import menno from "../images/menno-pic.png"

import "../styles/about.css"

export default function About(props) {
  const [percentage, setPercentage] = useState(0)
  const selectedDiv = useRef(null)

  const printValues = (
    name,
    { scrollTop, scrollHeight, clientHeight, offsetTop }
  ) => console.log(name, { scrollTop, scrollHeight, clientHeight, offsetTop })

  const onScroll = () => {
    console.log("------------------")
    printValues("div", selectedDiv.current)
    printValues("window", document.documentElement)

    const { scrollTop } = document.documentElement
    const bottomGoal =
      selectedDiv.current.scrollHeight / 2 + selectedDiv.current.offsetTop
    const topGoal = selectedDiv.current.offsetTop / 2

    setPercentage((scrollTop / bottomGoal) * 100)
  }

  // const onScroll2 = () => {
  //   setPercentage(old => {
  //     const newValue = old + 10
  //     return newValue <= 100 ? newValue : old
  //   })
  // }

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

          <div
            className="col-md-2 border border-dark border-top-0 border-bottom-0 justify-content-center d-flex"
            ref={selectedDiv}
          >
            <div
              className="arrow2"
              style={{ height: `calc(0px + ${percentage}%)` }}
            >
              <div
                className="line1"
                style={{ top: `calc(10px + ${percentage}%)` }}
              ></div>
              <div
                className="line2"
                style={{ top: `calc(0px + ${percentage}%)` }}
              ></div>
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
