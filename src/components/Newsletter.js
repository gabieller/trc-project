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
    <div className="row container col-xl-11">
      <form>
        <div className="newsletter-title">
        <h4>Follow our latest news</h4>
        <h4 className="pb-4">Sign up for our newsletter</h4>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum. At nam minimum ponderum. Est audiam animal
        molestiae te. Ex duo eripuit mentitum.
        </div>

        <div className="d-column-flex d-md-inline-flex col-xl-12 pt-3 px-0">
          <input
            className="col-xl-8"
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="| Enter your email"
            required
          />

          <div className="input-group-append col-xl-12 p-0">
            <Button
              onClick={handleSubmit}
              className="btn-black btn-block w-25" 
              variant="contained"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="d-flex flex-column pt-3">
          <span status={status}>{message}</span>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
