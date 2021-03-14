import React from "react"
import SurveyItem from "./SurveyItem"
import "../../styles/surveyCards.css"
import questions from "./questions"

export default function Survey({ nextStep, prevStep, handleChange, index }) {
  const question = questions[index]
  const handleprev = e => {
    e.preventDefault()
    handleChange(questions[index - 1].name, "")
    prevStep()
  }

  const progress = ((index + 1) / (questions.length + 1)) * 100
  return (
    <>
      <div>
        <h2 className="fs-bold fs-1 text-center">{question.title}</h2>
        <br />
        <div className="d-flex justify-content-center pb-5">
          <div className="progress col-md-4" style={{ height: "4px" }}>
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
          <div className="d-flex flex-row justify-content-center">
            {question.options.map(({ icon, content }) => (
              <SurveyItem
                key={content}
                handleChange={handleChange}
                nextStep={nextStep}
                icon={icon}
                content={content}
                question={question.name}
              />
            ))}
          </div>

        {index > 0 && (
          <button type="button" className="btn pt-5" onClick={handleprev}>
            GO BACK
          </button>
        )}
      </div>
    </>
  )
}
