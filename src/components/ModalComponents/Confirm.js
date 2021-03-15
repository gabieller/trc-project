import React from "react"
import Button from "@material-ui/core/Button"
import Radio from "@material-ui/core/Radio"
import questions from "./questions"

export default function Confirm({ nextStep, prevStep, handleChange, values }) {
  const handleNext = e => {
    e.preventDefault()
    nextStep()
  }

  const handleprev = e => {
    e.preventDefault()
    handleChange(questions[questions.length - 1].name, "")
    prevStep()
  }

  const response = values["highestPriority"]
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
            Would you like to see the impact of our <br /> product on increasing{" "}
            {response.toLowerCase()} in your area?
          </p>

          <div className="d-flex justify-content-center pb-5">
            <Button
              className="box-confirm rounded-0 shadow p-3"
              variant="contained"
              onClick={handleNext}
            >
              <Radio />
              <span>
                Yes, I’d love to see if TRC could <br />
                {response} help me to meet my objectives.
              </span>
            </Button>
          </div>
        </div>
        <button type="button" className="btn pt-5 mt-1'" onClick={handleprev}>
            GO BACK
          </button>
      </div>
    </>
  )
}
