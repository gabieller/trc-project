import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "../styles/newsletter.css"

function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    const { result, msg } = await addToMailchimp(email)
    result === "success" && setEmail("")
    setMessage(msg.split("<")[0])
    setStatus(result)
  }

  const handleChange = event => setEmail(event.target.value)

  return (
    <div className="row col-10 g-0">
      <form>
        <div className="input-group mb-3">
          {/* <div className="d-md-inline-flex col-12 pt-3"> */}
          <input
            type="email"
            onChange={handleChange}
            className="form-control ps-2"
            placeholder="| Enter your email"
            aria-label="| Enter your email"
            style={{ color: "white" }}
          />
          <div className="input-group mb-3">
            <Button
              onClick={handleSubmit}
              className="btn-black "
              variant="contained"
            >
              Subscribe
            </Button>
          </div>
          {/* </div> */}
        </div>
        <div className="d-flex flex-column fw-bold py-3">
          <span status={status}>{message}</span>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
