import React from "react"
import MultiStepForm from "./MultiStepForm"

import "../../styles/modal.css"

export default function Modal(props) {
  const { className, modalRef } = props

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div>
        <MultiStepForm />
      </div>
    </div>
  )
}
