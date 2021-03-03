import React, { Component } from "react"
import Button from "@material-ui/core/Button"

import mockup from "../images/mockup.png"

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
          <div className="container">
            <div className="d-flex flex-column col-6">
              <h3>
                See how our product can improve <br /> [earlier answer] in your
                coverage area.
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
            <div className="wrap-mockup">
              <img src={mockup} className="mockup" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Success
