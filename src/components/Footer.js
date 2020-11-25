import React from "react"
import Button from "@material-ui/core/Button"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-black.png"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="row content">
        <div className="col-md-4 logo">
          <img alt="" src={trclogo} alt="" width="234" height="40" />
        </div>

        <div className="col-md-1 item">
          <p>COMPANY About News Investors Blog Careers Contact</p>
        </div>

        <div className="col-md-1 item">
          <p>SOLUTIONS Pingo</p>
        </div>

        <div className="col-md-6 newsletter">
          <p>TRC NEWSLETTER</p>
          <div className="input-group mb-3 w-75">
            <input
              type="text"
              className="form-control"
              placeholder="| Enter your email"
              aria-label="| Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <Button className="btn-newsletter" variant="contained">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <p>©2020 The Routing Company — All Rights Reserved</p>
      </div>
    </footer>
  )
}
