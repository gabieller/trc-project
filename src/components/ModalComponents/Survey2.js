import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../../images/form2_1.svg"
import icon2 from "../../images/form2_2.svg"
import icon3 from "../../images/form2_3.svg"
import icon4 from "../../images/form2_4.svg"

import "../../styles/surveyCards.css"

// export class Survey2 extends Component {
//   continue = e => {
//     e.preventDefault()
//     this.props.nextStep()
//   }

//   back = e => {
//     e.preventDefault()
//     this.props.prevStep()
//   }

// render() {
// const { values, handleChange } = this.props

const Survey2 = ({ setForm, formData, navigation }) => {
  const { onDemand, paraTransit, reportingTracking, fixedRoute } = formData

  const { next } = navigation

  return (
    // <>
    <div className="bg-white">
      <h2 className="fs-bold fs-1 text-center">You want to improve…</h2>
      <br />
      <div className="d-flex justify-content-center pb-5">
        <div className="progress col-md-4" style={{ height: "4px" }}>
          <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="40"
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
            value={onDemand}
            onClick={next}
          >
            <CardContent className="d-flex flex-column card-content justify-content-center">
              <img src={icon1} height="64" />
              <p className="fs-6 pt-3">On-demand transit</p>
            </CardContent>
          </Card>
        </Button>
        <Button>
          <Card
            className="rounded-0 border-dark"
            variant="outlined"
            value={paraTransit}
            onClick={next}
          >
            <CardContent className="d-flex flex-column card-content justify-content-center">
              <img src={icon2} height="64" />
              <p className="fs-6 pt-3">Paratransit</p>
            </CardContent>
          </Card>
        </Button>
        <Button>
          <Card
            className="rounded-0 border-dark"
            variant="outlined"
            value={reportingTracking}
            onClick={next}
          >
            <CardContent className="d-flex flex-column card-content justify-content-center">
              <img src={icon3} height="64" />
              <p className="fs-6 pt-3">Reporting and tracking</p>
            </CardContent>
          </Card>
        </Button>
        <Button>
          <Card
            className="rounded-0 border-dark"
            variant="outlined"
            value={fixedRoute}
            onClick={next}
          >
            <CardContent className="d-flex flex-column card-content justify-content-center">
              <img src={icon4} height="64" />
              <p className="fs-6 pt-3">Fixed route</p>
            </CardContent>
          </Card>
        </Button>
      </div>

      {/* <button type="button" className="btn" onClick={this.back}>
            GO BACK
          </button> */}
    </div>
    // </>
  )
  // }
}

export default Survey2
