import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import "../styles/contact.css"

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="contact-page">
        <div id="contact-page-first">
          <div className="row container contact-form-title">
            <div className="col justify-content-left contact-title">
              <h1>Contact our sales team</h1>
            </div>
          </div>
          <div className="row container contact-form-subtitle">
            <div className="col-md-7 col-sm-12 justify-content-left">
              <h3>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h3>
            </div>
          </div>

          <div className="row container row-form">
            <div className="col-form col-md-8 col-xs-12">
              <form className="form-horizontal form p-4 my-5">
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
                      name="name"
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
                      name="name"
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
                      name="name"
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
                      name="name"
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
                    <textarea className="form-control" rows="3">
                      Tell us more about your project, needs, timeline…
                    </textarea>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse pt-3 mr-4">
                  <Button
                    className="btn-black btn-block w-25 "
                    variant="contained"
                  >
                    Contact Sales
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-4 col-sm-12-py-5 topics">
              <h3 className="font-weight-bold topics-title">
                With The Routing Company you can:
              </h3>
              <div className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
              <div className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
              <div className="topics-body py-3">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
            </div>
          </div>
        </div>

        <div className="row contact-queries px-5">
          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">General queries</h4>
              <div className="card-text">
                Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
                dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">Technical support</h4>
              <div className="card-text">
                Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
                dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h4 className="card-title font-weight-bold">Careers</h4>
              <div className="card-text">
                Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
                dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

