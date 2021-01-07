import React from "react"
import Layout from "../components/Layout"
// import Button from "@material-ui/core/Button"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
import Newsletter from "../components/Newsletter"
import Responsive from "../components/Responsive"
import CardTeam from "../components/CardTeam"

import newsletterimage from "../images/newsletterimage.png"
// import linkedinblack from "../images/linkedin_black.svg"
import menno from "../images/menno-pic.png"
import uber from "../images/uber.svg"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about-page" className="container-fluid">
        <div className="section title pl-xs-0">
          <div className="row container pt-5">
            <div className="col-xl-8 col-xs-8">
              <h1>
                A world-class team focused on solving transportation problems
              </h1>
            </div>
          </div>
          <div className="row container justify-content-left pt-2">
            <div className="col-xl-7">
              We are a team of builders from technology, transportation,
              academia and public policy with a passion for helping cities
              unlock transit’s full potential.
            </div>
          </div>
        </div>

        <Responsive.Desktop>
          <div
            id="about-team"
            className="row about-line border-dark border-top"
          >
            <div className="col-md-5 border-dark  border-bottom p-0 col-left ">
              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
              <hr />

              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
              <hr />

              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
            </div>

            <Arrow />

            <div className="col-md-5 border-dark border-bottom p-0 col-right">
              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
              <hr />
              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
              <hr />
              <CardTeam
                imgsize="50"
                memberpicture={menno}
                linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                name={"Menno van der Zee"}
                position={"Co-Funder"}
                description={
                  "Specialized in mobility-on-demand systems for high capacity vehicles."
                }
                companylogo={uber}
              />
            </div>
          </div>

          {/* <div id="newsletter-section">
            <div className="row container justify-content-center newsletter">
              <div className="row container pt-5 ">
                <h3 className="col-md-12 text-center pb-5">
                  We build smart, sustainable transit solutions that are more
                  reliable and accessible than other mobility options. Our
                  MIT-born routing technology has been hailed as a striking
                  example of the potential around ridesharing.
                </h3>
              </div>
              <div className="row border border-dark bg-white">
                <div className="col-md-5 px-0">
                  <img
                    src={newsletterimage}
                    alt="Newsletter"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7 px-5 newsletter-box">
                  <Newsletter />

                  <div className="row container col-xl-11 warning-text">
                    <h6>
                      <small>
                        By clicking “Primary action” you accepting ipsum dolor
                        sit amet, sit ea brute mediocritatem, eu sed aliquam
                        scripserit dissentiunt.
                      </small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Responsive.Desktop>

        <Responsive.Mobile>
          <div
            id="about-team-mobile"
            className="row container border-top border-bottom border-dark"
          >
            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
            <hr />

            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
            <hr />

            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
            <hr />
            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
            <hr />
            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
            <hr />

            <CardTeam
              imgsize="75"
              memberpicture={menno}
              linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
              name={"Menno van der Zee"}
              position={"Co-Funder"}
              description={
                "Specialized in mobility-on-demand systems for high capacity vehicles."
              }
              companylogo={uber}
            />
          </div>
          {/* 
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
                      amet, sit ea brute mediocritatem, eu sed aliquam
                      scripserit dissentiunt.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Responsive.Mobile>
        <div id="newsletter-section">
          <div className="row container justify-content-center newsletter px-4">
            <div className="row pt-5 ">
              <div className="col-md-12 text-center pb-5 newsletter-text">
                We build smart, sustainable transit solutions that are more
                reliable and accessible than other mobility options. Our
                MIT-born routing technology has been hailed as a striking
                example of the potential around ridesharing.
              </div>
            </div>
            <div className="row border border-dark bg-white">
              <div className="col-md-5 px-0">
                <img
                  src={newsletterimage}
                  alt="Newsletter"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-7 px-5 newsletter-box">
                <Newsletter />

                <div className="row container col-xl-11 warning-text">
                  <h6>
                    <small>
                      By clicking “Primary action” you accepting ipsum dolor sit
                      amet, sit ea brute mediocritatem, eu sed aliquam
                      scripserit dissentiunt.
                    </small>
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
