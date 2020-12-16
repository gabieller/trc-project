import React from "react"
import DownloadButtons from "../components/DownloadButtons"
import Button from "@material-ui/core/Button"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-white.png"
import pingologo from "../images/pingo-logo-white.png"
import medium from "../images/medium.png"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

export default function Footer() {
  return (
    <footer id="footer" className="font-weight-bold px-5">
      <div className="row container">
        <div className="d-flex flex-column col-md-4 logo-trc pt-3">
          <div className="d-flex flex-column logo-trc ">
            <img src={trclogo} alt="Logo TRC" width="70" height="63" />
            <div className="social-media pb-3 px-1">
            <button className={`btn btn-link px-1`}>
                <img
                  src={medium}
                  alt="Medium button"
                  width="40"
                  height="30"
                />
              </button>
              <button className={`btn btn-link px-2`} >
                <img
                  src={twitter}
                  alt="Twitter button"
                  width="20"
                  height="20"
                />
              </button>
              <button className={`btn btn-link px-2`}>
                <img
                  src={linkedin}
                  alt="Linkedin button"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>

          <div className="logo-pingo">
            <img src={pingologo} alt="Logo PINGO" width="120" height="55" />
            <DownloadButtons />
          </div>
        </div>

        <div className="col-md-4">
          <div className="row links-row ">
            <div className="col-md-6 links pt-3">
              <div>COMPANY</div>
              <div>About</div>
              <div>News</div>
              <div>Investors</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
            <div className="col-md-6 links pt-3">
              <div>SOLUTIONS</div>
              <div>Pingo</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 newsletter pt-3 pl-4">
          <p>TRC NEWSLETTER</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
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

      <div className="row container copyright pt-3 pl-4">
        <div className="d-flex flex-column col-md-3 pl-4">
          <div>©2020 The Routing Company</div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
