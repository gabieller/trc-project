import React, { useState } from "react"
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
    <form>
      <h2>Follow our latest news</h2>
      <h2>Sign up for our newsletter</h2>
      <div>
        <input
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="example@domain.com"
          required
        />
        <span status={status}>{message}</span>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Subscribe
      </button>
    </form>
  )
}

export default SubscribeForm
