import React from "react"
import Button from "@material-ui/core/Button"
import Responsive from "../components/Responsive"
import "../styles/footer.css"

import trclogo from "../images/trc-logo-white.png"
import pingologo from "../images/pingo-logo-white.png"
import medium from "../images/medium.png"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

// TODO: fix image size on mobile, align app buttons and social media links to the right


export default function Footer() {
  return (
    <footer id="footer" className="section font-weight-bold">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <div className="row no-gutters">
              <div className="col-6 col-md-12">
                <Responsive.Desktop>
                  <img src={trclogo} alt="Logo TRC" width="70" height="63" />
                </Responsive.Desktop>
                <Responsive.Mobile>
                  <img src={trclogo} alt="Logo TRC" width="140" height="115" />
                </Responsive.Mobile>
              </div>
              <div className="col-6 col-md-12 pb-3">
                <Responsive.Mobile>
                  <button className="btn btn-link px-1">
                    <img
                      src={medium}
                      alt="Medium button"
                      width="50"
                      height="40"
                    />
                  </button>
                  <button className="btn btn-link px-2">
                    <img
                      src={twitter}
                      alt="Twitter button"
                      width="30"
                      height="30"
                    />
                  </button>
                  <button className="btn btn-link">
                    <img
                      src={linkedin}
                      alt="Linkedin button"
                      width="30"
                      height="30"
                    />
                  </button>
                </Responsive.Mobile>
                <Responsive.Desktop>
                  <button className="btn btn-link px-1">
                    <img
                      src={medium}
                      alt="Medium button"
                      width="40"
                      height="30"
                    />
                  </button>
                  <button className="btn btn-link px-2">
                    <img
                      src={twitter}
                      alt="Twitter button"
                      width="20"
                      height="20"
                    />
                  </button>
                  <button className="btn btn-link px-2">
                    <img
                      src={linkedin}
                      alt="Linkedin button"
                      width="20"
                      height="20"
                    />
                  </button>
                </Responsive.Desktop>
              </div>
            </div>
            <hr className="d-md-none" />
            <div className="row no-gutters">
              <div className="col-6 col-md-12">
                <Responsive.Desktop>
                  <img
                    src={pingologo}
                    alt="Logo PINGO"
                    width="120"
                    height="55"
                  />
                </Responsive.Desktop>
                <Responsive.Mobile>
                  <img
                    src={pingologo}
                    alt="Logo PINGO"
                    width="130"
                    height="65"
                  />
                </Responsive.Mobile>
              </div>
              <div className="col-6 col-md-12">
                <div className="row no-gutters">
                  <button className="btn btn-link px-0">
                    <img
                      src={googleplaybadge}
                      alt="Google Play Download"
                      width="135"
                      height="60"
                    />
                  </button>
                  <button className="btn btn-link pl-2">
                    <img
                      src={appstorebadge}
                      alt="App Store Download"
                      width="120"
                      height="50"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <div className="row no-gutters links-row px-0">
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
                className="form-control pl-2"
                placeholder="| Enter your email"
                aria-label="| Enter your email"
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
        <div className="row col-12 no-gutters">
          <div className="d-flex flex-column">
            <div>©2020 The Routing Company</div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
