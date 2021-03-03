import React, { Component } from "react"
import Survey1 from "./Survey1"
import Survey2 from "./Survey2"
import Survey3 from "./Survey3"
import Survey4 from "./Survey4"
import Confirm from "./Confirm"
import Success from "./Success"

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { coverage, efficiency, equity, convenience } = this.state
    const values = { coverage, efficiency, equity, convenience }

    switch (step) {
      case 1:
        return (
          <Survey1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            // values={values}
          />
        )
      case 2:
        return (
          <Survey2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // values={values}
          />
        )
      case 3:
        return (
          <Survey3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // values={values}
          />
        )
      case 4:
        return (
          <Survey4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // values={values}
          />
        )
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )

      case 6:
        return <Success />
      default:
        console.log("This is a multi-step form built with React.")
    }
    // <button type="button" class="btn">GO BACK</button>
  }
}

export default UserForm
