import React from "react"
import Newsletter from "../components/Newsletter"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-white.png"
import pingologo from "../images/pingo-logo-white.png"
import medium from "../images/medium.png"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"

// TODO: fix image size on mobile, align app buttons and social media links to the right

export default function Footer() {
  return (
    <footer id="footer" className="section fw-bold">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-5">
            <div className="row g-0">
              <div className="col-6 col-md-12">
                <Link to="/">
                  <img src={trclogo} alt="Logo TRC" className="trclogo" />
                </Link>
              </div>
              <div className="col-6 col-md-12 py-3 d-flex align-middle">
                <Button
                  className="btn btn-link px-0"
                  href="https://medium.com/routable-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={medium}
                    alt="Medium button"
                    width="40"
                    height="30"
                  />
                </Button>
                <Button
                  className="btn btn-link"
                  href="https://twitter.com/routing_company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter button"
                    className="img-fluid"
                  />
                </Button>
                <Button
                  className="btn btn-link"
                  href="https://www.linkedin.com/company/theroutingcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Linkedin button"
                    className="img-fluid"
                  />
                </Button>
              </div>
            </div>
            <hr className="d-md-none" />
            <div className="row g-0">
              <div className="col-6 col-md-12 py-3">
                <Link to="/pingo">
                  <img src={pingologo} alt="Logo PINGO" className="pingologo" />
                </Link>
              </div>
              <div className="col-6 col-md-7 d-md-flex">
                <Button className="btn btn-link px-0">
                  <img
                    src={googleplaybadge}
                    alt="Google Play Download"
                    className="img-fluid"
                  />
                </Button>
                <Button className="btn btn-link px-0">
                  <img
                    src={appstorebadge}
                    alt="App Store Download"
                    className="img-fluid"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="col-3 d-none d-md-block">
            <div className="row g-0 links-row px-0">
              <div className="col-xl-5 col-lg-4 pb-md-3 links">
                <div>COMPANY</div>
                <Link to="/">
                  <div>Home</div>
                </Link>
                <Link to="/team">
                  <div>Team</div>
                </Link>
                <Link to="/whytrc">
                  <div>Why TRC</div>
                </Link>
                <Link to="/contact">
                  <div>Contact</div>
                </Link>
                <Link to="/blog">
                  <div>Blog</div>
                </Link>
                <Link to="/">
                  <div>Careers</div>
                </Link>
                <Link to="/pingo">
                  <div>Pingo</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <p>TRC NEWSLETTER</p>
            <Newsletter />
            {/* <div className="input-group mb-3">
              <input
                type="text"
                className="form-control ps-2"
                placeholder="| Enter your email"
                aria-label="| Enter your email"
                style={{ color: "white" }}
              />
              <div className="input-group-append">
                <Button className="btn-white" variant="contained">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>
        <hr className="d-md-none" />
        <div className="d-flex flex-column col-12 g-0 pt-5 text-center">
          <Link to="/">©2020 The Routing Company</Link>
          <Link to="/">All Rights Reserved</Link>
          <Link to="/privacypolicy">Terms and Conditions | Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
