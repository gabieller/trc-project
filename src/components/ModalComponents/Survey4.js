import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import icon1 from "../../images/form4_1.svg"
import icon2 from "../../images/form4_2.svg"
import icon3 from "../../images/form4_3.svg"

import "../../styles/surveyCards.css"

export default function Survey4({ nextStep, prevStep }) {
  const handleNext = e => {
    e.preventDefault()
    nextStep()
  }

  const handleprev = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <>
      <div className="bg-white">
        <h2 className="fs-bold fs-1 text-center">You have…</h2>
        <br />
        <div className="d-flex justify-content-center pb-5">
          <div className="progress col-md-4" style={{ height: "4px" }}>
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
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
              onClick={handleNext}
            >
              <CardContent className="d-flex flex-column card-content justify-content-center">
                <img src={icon1} height="64" alt="Bus Icon" />
                <p className="fs-6 pt-3"> Buses</p>
              </CardContent>
            </Card>
          </Button>
          <Button>
            <Card
              className="rounded-0 border-dark"
              variant="outlined"
              onClick={handleNext}
            >
              <CardContent className="d-flex flex-column card-content justify-content-center">
                <img src={icon2} height="64" alt="Busers and Driver Icon" />
                <p className="fs-6 pt-3"> Buses and drivers</p>
              </CardContent>
            </Card>
          </Button>
          <Button>
            <Card
              className="rounded-0 border-dark"
              variant="outlined"
              onClick={handleNext}
            >
              <CardContent className="d-flex flex-column card-content justify-content-center">
                <img src={icon3} height="64" alt="No busers Icon" />
                <p className="fs-6 pt-3"> No buses</p>
              </CardContent>
            </Card>
          </Button>
        </div>

        <button type="button" className="btn pt-5" onClick={handleprev}>
          GO BACK
        </button>
      </div>
    </>
  )
}
