import React from "react"
import Button from "@material-ui/core/Button"
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
          <div className="col-12 col-md-4">
            <div className="row g-0">
              <div className="col-6 col-md-12">
                <img src={trclogo} alt="Logo TRC" className="trclogo" />
              </div>
              <div className="col-6 col-md-12 pb-3 d-flex align-middle">
                <button className="btn btn-link px-0">
                  <img
                    src={medium}
                    alt="Medium button"
                    width="40"
                    height="30"
                  />
                </button>
                <button className="btn btn-link">
                  <img
                    src={twitter}
                    alt="Twitter button"
                    className="img-fluid"
                  />
                </button>
                <button className="btn btn-link">
                  <img
                    src={linkedin}
                    alt="Linkedin button"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
            <hr className="d-md-none" />
            <div className="row g-0">
              <div className="col-6 col-md-12 py-3">
                <img src={pingologo} alt="Logo PINGO" className="pingologo" />
              </div>
              <div className="col-6 col-md-7 d-md-flex">
                <button className="btn btn-link px-0">
                  <img
                    src={googleplaybadge}
                    alt="Google Play Download"
                    className="img-fluid"
                  />
                </button>
                <button className="btn btn-link px-0">
                  <img
                    src={appstorebadge}
                    alt="App Store Download"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <div className="row g-0 links-row px-0">
              <div className="col-xl-5 col-lg-4 pb-md-3 links">
                <div>COMPANY</div>
                <div>About</div>
                <div>News</div>
                <div>Investors</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
              <div className="col-xl-5 col-lg-4 links">
                <div>SOLUTIONS</div>
                <div>Pingo</div>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <p>TRC NEWSLETTER</p>
            <div className="input-group mb-3">
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
            </div>
          </div>
        </div>
        <hr className="d-md-none" />
        <div className="row col-12 g-0 pt-3">
          <div>©2020 The Routing Company</div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
