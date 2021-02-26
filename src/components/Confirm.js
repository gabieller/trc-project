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
        <div className="d-flex flex-column justify-content-center">
          <h2 className="fs-bold fs-1 text-center">Almost there!</h2>
          <hr />
          <p className="fs-3 text-center">
            Would you like to see the impact of our <br /> product on increasing
            [equity] in your area?
          </p>
          {/* <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button> */}
          <Button color="primary" variant="contained" onClick={this.continue}>
            <Radio />
            Yes, I’d love to see if TRC could ${`values`}
            help me to meet my objectives.
          </Button>
        </div>
      </>
    )
  }
}

export default Confirm
