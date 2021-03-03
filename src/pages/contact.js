import React, { useState, Suspense } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import "../styles/contact.css"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

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
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>

          <div className="container title-content g-0">
            <div className="container">
              <div className="row ">
                <div className="col-md-8 shadow bg-white p-md-5">
                  <h1>
                    Lower costs. More coverage. <br />
                    <p className="green">Contact our team.</p>
                  </h1>
                  <form onSubmit={handleOnSubmit} className="form g-0">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-3 fw-bold">
                        <label htmlFor="inputEmail" className="col-form-label">
                          Email
                        </label>
                      </div>
                      <div className="col-md-9 g-0">
                        <input
                          name="Email"
                          placeholder="| janedoe@example.com"
                          type="text"
                          id="inputEmail"
                          className="form-control rounded-0"
                          aria-describedby="email"
                        />
                      </div>
                    </div>

                    <div className="row g-3 align-items-center">
                      <div className="col-md-3 fw-bold">
                        <label
                          htmlFor="inputMessage"
                          className="col-form-label"
                        >
                          Problem to solve
                        </label>
                      </div>
                      <div className="col-md-9 g-0">
                        <textarea
                          name="message"
                          type="textarea"
                          placeholder="| Insert your message here"
                          rows="5"
                          id="inputMessage"
                          className="form-control rounded-0"
                          aria-describedby="message"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row-reverse pt-md-3 py-4 ">
                      <Button
                        type="submit"
                        className="btn btn-black btn-block"
                        disabled={serverState.submitting}
                        variant="contained"
                      >
                        Get in touch
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

                <div className="col-md-4 pt-5 ps-md-5 pe-md-0">
                  <div className="py-3">
                    <h5 className="fw-bold">General queries</h5>
                    <small>
                      For general queries, please email
                      info@theroutingcompany.com
                    </small>
                  </div>
                  <div className="py-3">
                    <h5 className="fw-bold">Technical support</h5>

                    <small>
                      For general queries, please email
                      info@theroutingcompany.com
                    </small>
                  </div>
                  <div className="py-3">
                    <h5 className="fw-bold">Careers</h5>
                    <small>
                      For general queries, please email
                      info@theroutingcompany.com
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
