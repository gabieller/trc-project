import React, { Component } from "react"
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../../images/form1_1.svg"
import icon2 from "../../images/form1_2.svg"

import "../../styles/surveyCards.css"

export class Survey1 extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    // const { values, handleChange } = this.props

    return (
      <>
        <div className="bg-white">
          <h2 className="fs-bold fs-1 text-center">You are...</h2>
          <br />
          <div className="d-flex justify-content-center pb-5">
            <div className="progress col-md-4" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <Button className="btn-survey">
              <Card
                className="rounded-0 border-dark btn-survey"
                variant="outlined"
                onClick={this.continue}
              >
                <CardContent className="d-flex flex-column card-content justify-content-center">
                  <img src={icon1} height="64" />
                  <p className="fs-6 pt-3">
                    A transit agency <br /> or operator
                  </p>
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
                  <img src={icon2} height="64" />
                  <p className="fs-6 pt-3">
                    Some other type of <br /> transportation manager
                  </p>
                </CardContent>
              </Card>
            </Button>
          </div>
       
        </div>
      </>
    )
  }
}

export default Survey1
