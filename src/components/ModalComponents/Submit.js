import React, { Component } from "react"
import Button from "@material-ui/core/Button"

import mockup from "../../images/mockup_cut.png"

// import Dialog from "@material-ui/core/Dialog"
// import AppBar from "@material-ui/core/AppBar"
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"

export class Success extends Component {
  continue = e => {
    e.preventDefault()
    // PROCESS FORM //
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    return (
      <>
        <div className="bg-white">
          <div className="row">
            <div className="d-flex flex-column col-md-7  text-submit">
              <h3>
                See how our product can improve <br />{" "}
                <span className="green">[earlier answer]</span> in your coverage
                area.
              </h3>

              <div className="input-group mb-3 col-8">
                <input
                  type="text"
                  className="form-control ps-2"
                  placeholder="| Enter your email"
                  aria-label="| Enter your email"
                />
                <div className="input-group-append">
                  <Button className="btn-black" variant="contained">
                    SEND
                  </Button>
                </div>
              </div>
            </div>
            <div className="wrap-mockup col-md-6">
              <img src={mockup} className="mockup img-fluid" alt="Mockup"/>
            </div>
          </div>
          <div className="col-md-4 submit">
            Many companies in this space <br /> talk a big game but can’t
            deliver <br />
            results. We’re different.
          </div>
        </div>
      </>
    )
  }
}

export default Success
