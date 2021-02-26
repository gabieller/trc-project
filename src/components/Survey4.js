import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../images/form4_1.svg"
import icon2 from "../images/form4_2.svg"
import icon3 from "../images/form4_3.svg"

import "../styles/surveyCards.css"

export class Survey4 extends Component {
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
        <h2 className="fs-bold fs-1 text-center">You have…</h2>
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
                <p className="fs-6 pt-3"> Buses</p>
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
                <p className="fs-6 pt-3"> Buses and drivers</p>
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
                <p className="fs-6 pt-3"> No buses</p>
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

export default Survey4
