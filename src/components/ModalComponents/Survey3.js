import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../../images/coverage-icon.svg"
import icon2 from "../../images/efficiency-icon.svg"
import icon3 from "../../images/equity-icon.svg"
import icon4 from "../../images/convenience-icon.svg"

import "../../styles/surveyCards.css"

export class Survey3 extends Component {
  continue = e => {
    e.preventDefault()
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
          <h2 className="fs-bold fs-1 text-center">
            Your highest priority is…
          </h2>
          <br />
          <div className="d-flex justify-content-center pb-5">
            <div className="progress col-md-4" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <Button>
              <Card
                className="rounded-0 border-dark"
                variant="outlined"
                onClick={this.continue}
              >
                <CardContent className="d-flex flex-column card-content justify-content-center">
                  <img src={icon1} height="64" alt="Coverage Icon" />
                  <p className="fs-6 pt-3">Coverage</p>
                </CardContent>
              </Card>
            </Button>
            <Button>
              <Card
                className="rounded-0 border-dark"
                variant="outlined"
                onClick={this.continue}
              >
                <CardContent className="d-flex flex-column card-content justify-content-center">
                  <img src={icon2} height="64" alt="Efficiency Icon" />
                  <p className="fs-6 pt-3"> Efficiency</p>
                </CardContent>
              </Card>
            </Button>
            <Button>
              <Card
                className="rounded-0 border-dark"
                variant="outlined"
                onClick={this.continue}
              >
                <CardContent className="d-flex flex-column card-content justify-content-center">
                  <img src={icon3} height="64" alt="Equity Icon" />
                  <p className="fs-6 pt-3"> Equity</p>
                </CardContent>
              </Card>
            </Button>
            <Button>
              <Card
                className="rounded-0 border-dark"
                variant="outlined"
                onClick={this.continue}
              >
                <CardContent className="d-flex flex-column card-content justify-content-center">
                  <img src={icon4} height="64" alt="Convenience Icon" />
                  <p className="fs-6 pt-3"> Convenience</p>
                </CardContent>
              </Card>
            </Button>
          </div>

          <button type="button" className="btn pt-5" onClick={this.back}>
            GO BACK
          </button>
        </div>
      </>
    )
  }
}

export default Survey3
