import React, { useState } from "react"
// import { useForm } from "@formspree/react"
import axios from "axios"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import "../styles/contact.css"

export default function Contact(props) {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/f/xoqpknav",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Layout {...props}>
      <div id="contact-page">
        <div id="contact-page-first">
          <div className="row container contact-form-title">
            <div className="col justify-content-left contact-title">
              <h2>Contact our sales team</h2>
            </div>
          </div>
          <div className="row container contact-form-subtitle">
            <div className="col-md-7 col-sm-12 justify-content-left">
              <h4>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h4>
            </div>
          </div>

          <div className="row container row-form">
            <div className="col-form col-md-8 col-xs-12">
              <form
                onSubmit={handleOnSubmit}
                className="form-horizontal form p-4 my-5"
              >
                <div className="row form-group py-2">
                  <div className="col-md-4">
                    <label
                      className="control-label font-weight-bold"
                      for="name"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      name="firstname"
                      type="text"
                      placeholder="| Jane"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row form-group py-2">
                  <div className="col-md-4">
                    <label
                      className="control-label font-weight-bold"
                      for="name"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      name="lastname"
                      type="text"
                      placeholder="| Doe"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group py-2">
                  <div className="col-md-4">
                    <label
                      className="control-label font-weight-bold"
                      for="name"
                    >
                      Work Email
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      name="work-email"
                      type="text"
                      placeholder="| janedoe@example.com"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group py-2">
                  <div className="col-md-4 ">
                    <label
                      className="control-label font-weight-bold"
                      for="name"
                    >
                      Company website
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      name="company-website"
                      type="text"
                      placeholder="| janedoe@example.com"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group py-2">
                  <div className="col-md-4">
                    <label
                      className="control-label font-weight-bold"
                      for="name"
                    >
                      Leave us a message
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      name="message"
                      type="textarea"
                      rows="3"
                      placeholder="Tell us more about your project, needs, timeline…"
                      className="form-control text-area"
                    ></input>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse pt-3 mr-4">
                  <Button
                    type="submit"
                    className="btn-black btn-block w-25 "
                    disabled={serverState.submitting}
                    variant="contained"
                  >
                    Contact Sales
                  </Button>
                </div>

                <div className="col-md-6 justify-content-left">
                  {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                      {serverState.status.msg}
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className="col-md-4 col-sm-12-py-5 topics">
              <h5 className="font-weight-bold topics-title">
                With The Routing Company you can:
              </h5>
              <h6 className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </h6>
              <h6 className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </h6>
              <h6 className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </h6>
            </div>
          </div>
        </div>

        <div className="row container contact-queries px-0">
          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">General queries</h4>
              <div className="card-text">
                Qui dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">Medium</h4>
              <div className="card-text">
                Qui dicta sadipscing te at dicta sadipscing te at.
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">Careers</h4>
              <div className="card-text">
                Qui dicta sadipscing te at dicta sadipscing te at.
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="row container contact-queries px-0 pt-3">
            <div className="col-md-4 col-item">
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  Technical support
                </h4>
                <div className="card-text">
                  Qui dicta sadipscing te at info@theroutingcompany.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
