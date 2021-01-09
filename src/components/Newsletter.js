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
    <div className="section">
      <div className="container no-gutters">
        <div className="row col-12 col-md-10">
          <form>
            <h4>Follow our latest news</h4>
            <h4 className="pb-5">Sign up for our newsletter</h4>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
            <div className="d-column-flex d-md-inline-flex col-12 pt-3 px-0">
              <input
                className="col-12 col-md-8"
                type="email"
                onChange={handleChange}
                value={email}
                placeholder="| Enter your email"
                required
              />

              <div className="input-group-append col-12 col-md-4 p-0">
                <Button
                  onClick={handleSubmit}
                  className="btn-black btn-block"
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
          <div className="row no-gutters">
          <div className="col-md-10 warning-text">
            <h6>
              <small>
                By clicking “Primary action” you accepting ipsum dolor sit amet,
                sit ea brute mediocritatem, eu sed aliquam scripserit
                dissentiunt.
              </small>
            </h6>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm
