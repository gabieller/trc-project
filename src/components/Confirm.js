import React, { Component } from "react"
// import { List, ListItem, ListItemText } from "@material-ui/core/"
import Button from "@material-ui/core/Button"
import Radio from "@material-ui/core/Radio"

export class Confirm extends Component {
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
    const {
      values: { coverage, efficiency, equity, convenience },
    } = this.props
    return (
      <>
        <div className="bg-white container">
          <div className="d-flex flex-column justify-content-center">
            <h2 className="fs-bold fs-1 text-center">Almost there!</h2>
            <br />
            <div className="d-flex justify-content-center pb-5">
              <div className="progress col-md-4" style={{ height: "4px" }}>
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <p className="fs-3 text-center">
              Would you like to see the impact of our <br /> product on
              increasing [equity] in your area?
            </p>
            {/* <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button> */}
            <div className="d-flex justify-content-center">
              <Button
                className="box-confirm rounded-0 shadow"
                variant="contained"
                onClick={this.continue}
              >
                <Radio />
                <span>
                  Yes, I’d love to see if TRC could <br />${`values`}
                  help me to meet my objectives.
                </span>
              </Button>
            </div>
          </div>
          <button type="button" className="btn pt-5" onClick={this.back}>
            GO BACK
          </button>
        </div>
      </>
    )
  }
}

export default Confirm
