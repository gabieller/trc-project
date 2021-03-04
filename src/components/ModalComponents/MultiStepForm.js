import React from "react"
import { useForm, useStep } from "react-hooks-helper"

import Survey1 from "./Survey1"
import Survey2 from "./Survey2"
import Survey3 from "./Survey3"
import Survey4 from "./Survey4"
import Confirm from "./Confirm"
import Submit from "./Submit"

const steps = [
  { id: "survey1" },
  { id: "survey2" },
  // { id: "survey3" },
  // { id: "survey4" },
  // { id: "confirm" },
  // { id: "submit" },
]

const defaultData = {
  transitAgency: "",
  otherType: "",
  onDemand: "",
  paraTransit: "",
  reportingTracking: "",
  fixedRoute: "",
}

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData)
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { formData, setForm, navigation }

  switch (id) {
    case "survey1":
      return <Survey1 {...props} />
    case "survey2":
      return <Survey2 {...props} />
    // case "survey3":
    //   return <Survey3 {...props} />
    // case "survey4":
    //   return <Survey4 {...props} />
    // case "confirm":
    //   return <Confirm {...props} />
    // case "submit":
    //   return <Submit {...props} />
    default:
      return null
  }
}

export default MultiStepForm

//   // Proceed to next step
//   nextStep = () => {
//     const { step } = this.state
//     this.setState({
//       step: step + 1,
//     })
//   }

//   // Go back to prev step
//   prevStep = () => {
//     const { step } = this.state
//     this.setState({
//       step: step - 1,
//     })
//   }

//   // Handle fields change
//   handleChange = input => e => {
//     this.setState({ [input]: e.target.value })
//   }

//   render() {
//     const { step } = this.state
//     const { coverage, efficiency, equity, convenience } = this.state
//     const values = { coverage, efficiency, equity, convenience }

//     switch (step) {
//       case 1:
//         return (
//           <Survey1
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             // values={values}
//           />
//         )
//       case 2:
//         return (
//           <Survey2
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             // values={values}
//           />
//         )
//       case 3:
//         return (
//           <Survey3
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             // values={values}
//           />
//         )
//       case 4:
//         return (
//           <Survey4
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             // values={values}
//           />
//         )
//       case 5:
//         return (
//           <Confirm
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             values={values}
//           />
//         )

//       case 6:
//         return <Success />
//       default:
//         console.log("This is a multi-step form built with React.")
//     }
//     // <button type="button" class="btn">GO BACK</button>
//   }
// }

// export default UserForm
