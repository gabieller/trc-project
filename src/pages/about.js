import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import Arrow from "../components/Arrow"
import Newsletter from "../components/Newsletter"
import CardTeam from "../components/CardTeam"

import newsletterimage from "../images/newsletterimage.png"
import james from "../images/james.jpg"
import menno from "../images/menno.jpg"
import thuan from "../images/thuan.jpg"
import alex from "../images/alex.jpg"
import bradford from "../images/bradford.jpg"
import daniela from "../images/daniela.jpg"
import uber from "../images/uber.svg"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about" className="container-fluid">
        <div className="section title">
          <div className="container title-content">
            <div className="row">
              <div className="col-12 col-md-8">
                <h1>
                  A world-class team focused on solving transportation problems
                </h1>
              </div>
            </div>
            <div className="row justify-content-left">
              <div className="col-12 col-md-6">
                We are a team of builders from technology, transportation,
                academia and public policy with a passion for helping cities
                unlock transit’s full potential.
              </div>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="container-fluid container-xxl">
            <div className="row border-top border-dark">
              <div className="col-12 col-md-5 border border-top-0 border-dark col-left g-0">
                <CardTeam
                  imgsize="50"
                  memberpicture={james}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"James Cox"}
                  position={"CEO"}
                  description={
                    "Ridesharing industry leader who launched uberPOOL globally from inception. Chief Product officer of Canoo."
                  }
                  companylogo={uber}
                />
                <hr />

                <CardTeam
                  imgsize="50"
                  memberpicture={menno}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"Menno van der Zee"}
                  position={"Head of Global Business Development"}
                  description={
                    "Specialized in mobility-on-demand systems for high capacity vehicles."
                  }
                  companylogo={uber}
                />
                <hr />

                <CardTeam
                  imgsize="50"
                  memberpicture={thuan}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"Thuan Pham"}
                  position={"Technology Advisor"}
                  description={
                    "Previously the CTO of Uber and now the CTO of Coupang."
                  }
                  companylogo={uber}
                />
              </div>

              <Arrow />

              <div className="col-12 col-md-5 border border-top-0 border-dark col-right g-0">
                <CardTeam
                  imgsize="50"
                  memberpicture={alex}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"Alex Wallar"}
                  position={"CTO"}
                  description={
                    "Specialized in mathematical optimization for high-capacity shared rides. Author of the seminal research on high-capacity ride-sharing."
                  }
                  companylogo={uber}
                />
                <hr />

                <CardTeam
                  imgsize="50"
                  memberpicture={bradford}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"Bradford Church"}
                  position={"Director of Product"}
                  description={
                    "Ridesharing veteran and product expert who launched uberBUS globally."
                  }
                  companylogo={uber}
                />
                <hr />

                <CardTeam
                  imgsize="50"
                  memberpicture={daniela}
                  linkedinurl={"https://www.linkedin.com/in/mennovanderzee/"}
                  name={"Daniela Rus"}
                  position={"Technology Advisor"}
                  description={
                    "Deputy Dean of Research, Schwarzman College of Computing at MIT."
                  }
                  companylogo={uber}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row col-10 col-md-6 text-center g-0 pt-5 text-build">
          We build smart, sustainable transit solutions that are more reliable
          and accessible than other mobility options. Our MIT-born routing
          technology has been hailed as a striking example of the potential
          around ridesharing.
        </div>
        <div className="section newsletter">
          <div className="container px-4">
            <div className="row  border border-dark bg-white g-0">
              <div className="col-12 col-md-5">
                <img
                  src={newsletterimage}
                  alt="Newsletter"
                  className="img-fluid"
                  width="100%"
                />
              </div>
              <div className="col-12 col-md-7 d-flex align-items-center pt-5 pt-md-0">
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
