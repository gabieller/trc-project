import React from "react"
import Responsive from "../Responsive"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

const SurveyItem = ({ handleChange, nextStep, icon, content, question }) => {
  const handleNext = e => {
    e.preventDefault()
    handleChange(question, content)
    nextStep()
  }

  return (
    <>
    <Responsive.Desktop>
      <Button>
        <Card
          className="rounded-0 border-dark"
          variant="outlined"
          onClick={e => handleNext(e, 0)}
        >
          <CardContent className="d-flex flex-column card-content justify-content-center">
            <img src={icon} height="64" alt="Agency" />
            <p
              className="fs-6 pt-3"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </CardContent>
        </Card>
      </Button>
    </Responsive.Desktop>

    <Responsive.Mobile>
        <Button>
        <Card
          className="rounded-0 border-dark"
          variant="outlined"
          onClick={e => handleNext(e, 0)}
        >
          <CardContent className="d-flex flex-column card-content-mobile justify-content-center">
            <img src={icon} height="36" alt="Agency" />
            <p
              className="pt-3"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </CardContent>
        </Card>
      </Button>
    </Responsive.Mobile>
    </>
  )
}

export default SurveyItem
