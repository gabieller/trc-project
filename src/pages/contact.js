import React, { useState } from "react"
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
      <div id="contact" className="container-fluid">
        <div className="section row-form">
          <div className="container">
            <h2>Contact our sales team</h2>

            <div className="row">
              <div className="col-md-8 border border-dark bg-white p-5">
                <form onSubmit={handleOnSubmit} className="form g-0">
                  <div className="row g-3 align-items-center">
                    <div className="col-3 fw-bold">
                      <label for="inputFirsttName" className="col-form-label">
                        First Name
                      </label>
                    </div>
                    <div className="col-9 g-0">
                      <input
                        name="firstname"
                        type="text"
                        id="inputFirsttName"
                        className="form-control rounded-0"
                        aria-describedby="firstName"
                      />
                    </div>
                  </div>

                  <div className="row g-3 align-items-center">
                    <div className="col-3 fw-bold">
                      <label for="inputLastName" className="col-form-label">
                        Last Name
                      </label>
                    </div>
                    <div className="col-9 g-0">
                      <input
                        name="lastname"
                        type="text"
                        id="inputLastName"
                        className="form-control rounded-0"
                        aria-describedby="lastName"
                      />
                    </div>
                  </div>

                  <div className="row g-3 align-items-center">
                    <div className="col-3 fw-bold">
                      <label for="inputWorkEmail" className="col-form-label">
                        Work mail
                      </label>
                    </div>
                    <div className="col-9 g-0">
                      <input
                        name="workemail"
                        type="text"
                        id="inputWorkEmail"
                        className="form-control rounded-0"
                        aria-describedby="workemail"
                      />
                    </div>
                  </div>

                  <div className="row g-3 align-items-center">
                    <div className="col-3 fw-bold">
                      <label
                        for="inputCompanyWebsite"
                        className="col-form-label"
                      >
                        Company website
                      </label>
                    </div>
                    <div className="col-9 g-0">
                      <input
                        name="companywebsite"
                        type="text"
                        id="inputCompanyWebsite"
                        className="form-control rounded-0"
                        aria-describedby="companywebiste"
                      />
                    </div>
                  </div>

                  <div className="row g-3 align-items-center">
                    <div className="col-3 fw-bold">
                      <label for="inputMessage" className="col-form-label">
                        Leave us a message
                      </label>
                    </div>
                    <div className="col-9 g-0">
                      <textarea
                        name="message"
                        type="textarea"
                        rows="5"
                        id="inputMessage"
                        className="form-control rounded-0"
                        aria-describedby="message"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row-reverse pt-3">
                    <Button
                      type="submit"
                      className="btn btn-black btn-block"
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

              <div className="col-md-4 pt-5 ps-5 pe-0">
                <div className="section">
                  <h5 className="fw-bold">With TRC you can:</h5>
                  <div className="py-3">
                    <span role="img" aria-label="check">
                      ✔️
                    </span>
                    <small>
                      Et has minim elitr intellegat. Mea aeterno eleifend
                      antiopam ad, nam no suscipit quaerendum.
                    </small>
                  </div>
                  <div className="py-3">
                    <span role="img" aria-label="check">
                      ✔️
                    </span>
                    <small>
                      Et has minim elitr intellegat. Mea aeterno eleifend
                      antiopam ad, nam no suscipit quaerendum.
                    </small>
                  </div>
                  <div className="py-3">
                    <span role="img" aria-label="check">
                      ✔️
                    </span>
                    <small>
                      Et has minim elitr intellegat. Mea aeterno eleifend
                      antiopam ad, nam no suscipit quaerendum.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-white pt-0">
          <div className=" container">
            <div className=" row g-0">
              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title fw-bold">General queries</h4>
                  <div className="card-text w-75">
                    Qui dicta sadipscing te at
                  </div>
                  <a
                    className="text-dark"
                    c
                    href="mailto:info@theroutingcompany.com?subject=Infomations"
                  >
                    info@theroutingcompany.com
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title fw-bold">Medium</h4>
                  <div className="card-text w-75 pb-3">
                    Qui dicta sadipscing te at dicta sadipscing te at.
                  </div>
                  <Button
                    className="btn bg-white rounded-0 btn-action "
                    variant="contained"
                  >
                    VISIT MEDIUM
                  </Button>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="card-body">
                  <h4 className="card-title fw-bold">Careers</h4>
                  <div className="card-text w-75 pb-3">
                    Qui dicta sadipscing te at dicta sadipscing te at.
                  </div>
                  <Button
                    className="btn bg-white rounded-0 btn-action"
                    variant="contained"
                  >
                    CONTACT CAREERS
                  </Button>
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-md-4 ">
                <div className="card-body">
                  <h4 className="card-title fw-bold">Technical support</h4>
                  <div className="card-text w-75">
                    Qui dicta sadipscing te at
                  </div>
                  <a
                    className="text-dark"
                    href="mailto:info@theroutingcompany.com?subject=Infomations"
                  >
                    info@theroutingcompany.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
