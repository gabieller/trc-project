import React from "react"
import Button from "@material-ui/core/Button"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-black.png"

export default function Footer() {
  return (
    <footer id="footer" className="font-weight-bold px-5">
      <div className="row container ">
        <div className="col-md-4 logo pt-3">
          <img src={trclogo} alt="Logo" width="234" height="40" />
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
              <Button className="btn-black" variant="contained">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row container copyright pt-3 ">
        <div className="col-md-12 ">
          ©2020 The Routing Company — All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
