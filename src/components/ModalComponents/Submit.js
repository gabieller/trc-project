import React from "react"
import { useForm } from "@formspree/react"
import Button from "@material-ui/core/Button"

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
      <div id="submit">
        <div className="d-flex flex-column col-md-7 pt-5">
          <h3>
            See how our product can improve <br />
            <span className="green">[earlier answer]</span> in your coverage
            area.
          </h3>
        </div>

        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control ps-2"
                placeholder="| Enter your email"
                aria-label="| Enter your email"
              />
              <Button type="submit" className="btn-black" variant="contained">
                SEND
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="wrap-mockup col-md-6">
        <img src={mockup} className="mockup img-fluid" alt="Mockup" />
      </div>

      <div className="col-md-4 submit">
        Many companies in this space <br /> talk a big game but can’t deliver{" "}
        <br />
        results. We’re different.
      </div>
    </>
  )
}
