import React from "react"
import Button from "@material-ui/core/Button"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-black.png"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="row content">
        <div className="col-md-4 logo">
          <img src={trclogo} alt="Logo" width="234" height="40" />
        </div>

        <div className="col-md-4">
          <div className="row links-row">
            <div className="col-md-6 links">
              <div>COMPANY</div>
              <div>About</div>
              <div>News</div>
              <div>Investors</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
            <div className="col-md-6 links">
              <div>SOLUTIONS</div>
              <div>Pingo</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 newsletter">
          <p>TRC NEWSLETTER</p>
          <div className="input-group mb-3 w-100">
            <input
              type="text"
              className="form-control"
              placeholder="| Enter your email"
              aria-label="| Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <Button className="btn-black" variant="contained">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <div className="col-md-12">
          ©2020 The Routing Company — All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
