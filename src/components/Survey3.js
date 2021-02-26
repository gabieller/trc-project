import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../images/coverage-icon.svg"
import icon2 from "../images/efficiency-icon.svg"
import icon3 from "../images/equity-icon.svg"
import icon4 from "../images/convenience-icon.svg"

import "../styles/surveyCards.css"

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
    const { values, handleChange } = this.props
    return (
      <>
        <h2 className="fs-bold fs-1 text-center">Your highest priority is…</h2>
        <br />
        <div className="d-flex flex-row justify-content-center">
          <Button>
            <Card
              className="rounded-0 border-dark"
              variant="outlined"
              onClick={this.continue}
            >
              <CardContent className="d-flex flex-column card-content">
                <img src={icon1} height="64" />
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
              <CardContent className="d-flex flex-column card-content">
                <img src={icon2} height="64" />
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
              <CardContent className="d-flex flex-column card-content">
                <img src={icon3} height="64" />
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
              <CardContent className="d-flex flex-column card-content">
                <img src={icon4} height="64" />
                <p className="fs-6 pt-3"> Convenience</p>
              </CardContent>
            </Card>
          </Button>
        </div>

        <Button className="mt-5" color="primary" onClick={this.back}>
          GO BACK
        </Button>
      </>
    )
  }
}

export default Survey3
