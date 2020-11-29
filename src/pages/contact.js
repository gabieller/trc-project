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
            <div className="col-7 col-xs-12 justify-content-left">
              <h3>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h3>
            </div>
          </div>

          <div className="row container row-form">
            <div className="col-form col-md-8 col-xs-12">
              <form className="form-horizontal form">
                <div className="row form-group">
                  <div className="col-md-4">
                    <label className="control-label" for="name">
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
                <div className="row form-group">
                  <div className="col-md-4">
                    <label className="control-label" for="name">
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

                <div className="row form-group">
                  <div className="col-md-4">
                    <label className="control-label" for="name">
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

                <div className="row form-group">
                  <div className="col-md-4 ">
                    <label className="control-label" for="name">
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

                <div className="row form-group">
                  <div className="col-md-4">
                    <label className="control-label" for="name">
                      Leave us a message
                    </label>
                  </div>
                  <div className="col-md-8">
                    <textarea className="form-control" rows="3">
                      Tell us more about your project, needs, timeline…
                    </textarea>
                  </div>
                </div>
                <Button
                  className="btn-black btn-block w-25 "
                  variant="contained"
                >
                  Contact Sales
                </Button>
              </form>
            </div>
            <div className="col-md-4 col-xs-12 topics">
              <h4 className="font-weight-bold topics-title">
                With The Routing Company you can:
              </h4>
              <div className="topics-body">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
              <div className="topics-body">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
              <div className="topics-body">
                ✔️ Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                ad, nam no suscipit quaerendum.
              </div>
            </div>
          </div>
        </div>

        <div className="row contact-queries">
          <div className="col-md-4 col-item">
            <div className="card-body">
              <h3 className="card-title">General queries</h3>
              <div className="card-text">
                Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
                dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h3 className="card-title">Technical support</h3>
              <div className="card-text">
                Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
                dicta sadipscing te at info@theroutingcompany.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-item">
            <div className="card-body">
              <h3 className="card-title">Careers</h3>
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
