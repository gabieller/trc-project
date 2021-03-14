import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import mockup from "../../images/mockup_cut.png"

export default function Sucess({ prevStep, values }) {
  const [state, handleSubmit] = useForm("mleoqpjq", {
    data: {
      _subject: "Someone joined the newsletter",
      description: function () {
        return JSON.stringify(values)
      },
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <button type="submit">Sign up</button>
      </form>
    </>
  )
}
