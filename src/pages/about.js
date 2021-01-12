import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
import Newsletter from "../components/Newsletter"
import CardTeam from "../components/CardTeam"

import newsletterimage from "../images/newsletterimage.png"
import menno from "../images/menno-pic.png"
import uber from "../images/uber.svg"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about" className="container-fluid">
        <div className="section title">
          <div className="container title-content">
            <div className="row no-gutters">
              <div className="col-12 col-md-8">
                <h1>
                  A world-class team focused on solving transportation problems
                </h1>
              </div>
            </div>
            <div className="row no-gutters justify-content-left">
              <div className="col-12 col-md-6">
                We are a team of builders from technology, transportation,
                academia and public policy with a passion for helping cities
                unlock transit’s full potential.
              </div>
            </div>
          </div>
        </div>
        <div className="section team-card">
          {/* <div className="container"> */}
          <div className="row border-top border-dark no-gutters">
            <div className="col-12 col-md-5 border border-top-0 border-dark col-left ">
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

            <div className="col-12 col-md-5 border border-top-0 border-dark col-right">
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
          {/* </div> */}
        </div>
        <div className="section">
          <div className="container ">
            <div className="row justify-content-center no-gutters">
              <div className="col-10 col-md-6 text-center">
                We build smart, sustainable transit solutions that are more
                reliable and accessible than other mobility options. Our
                MIT-born routing technology has been hailed as a striking
                example of the potential around ridesharing.
              </div>
            </div>
          </div>
        </div>
        <div className="section newsletter">
          <div className="container">
            <div className="row  border border-dark no-gutters bg-white">
              <div className="col-12 col-md-5">
                <img
                  src={newsletterimage}
                  alt="Newsletter"
                  className="img-fluid"
                  width="100%"
                />
              </div>
              <div className="col-12 col-md-7">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
        <Demo />
      </div>
    </Layout>
  )
}
