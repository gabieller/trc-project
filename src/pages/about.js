import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
import Newsletter from "../components/Newsletter"
import Responsive from "../components/Responsive"
import CardTeam from "../components/CardTeam"

import newsletterimage from "../images/newsletterimage.png"
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
        </Responsive.Mobile>

        <div className="row container justify-content-center pt-5">
          <div className="col-10 col-md-6 text-center pb-5">
            We build smart, sustainable transit solutions that are more reliable
            and accessible than other mobility options. Our MIT-born routing
            technology has been hailed as a striking example of the potential
            around ridesharing.
          </div>
        </div>

        <div id="newsletter-section" className="row px-5">
          <div className="row container bg-white border border-dark px-0">
            <div className="col-md-5 px-0">
              <img
                src={newsletterimage}
                alt="Newsletter"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-md-7 border border-dark  newsletter-box">
              <Newsletter />

              <div className="row container col-md-9 warning-text">
                <h6>
                  <small>
                    By clicking “Primary action” you accepting ipsum dolor sit
                    amet, sit ea brute mediocritatem, eu sed aliquam scripserit
                    dissentiunt.
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
