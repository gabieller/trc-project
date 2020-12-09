import React, { useEffect } from "react"
import Layout from "../components/Layout"
import MediumBlog from "../components/MediumBlog"
import Button from "@material-ui/core/Button"

import "../styles/medium.css"

export default function Blog(props) {
  return (
    <Layout {...props}>
      <div id="medium-integration"></div>

      <div id="contact-us-medium" className="pl-5">
        <div className="row container contact-us-title pl-0">
          <div className="col-md-6 justify-content-left contact-us-title pb-3">
            <h2>Ad eos saepe lucilius, noster postulant philosophia.</h2>
          </div>
        </div>
        <div className="row container contact-us-subtitle pl-0">
          <div className="col-md-6 col-sm-12 justify-content-left">
            <h4>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </h4>
          </div>
        </div>
        <div className="row container contact-us-buttons pl-0">
          <div className=" justify-content-left pt-3">
            <div className="action-buttons row pl-3">
              <div className="action-buttons pr-3">
                <Button className="btn-black btn-action" variant="contained">
                  Primary Action
                </Button>
              </div>
              <div className="action-buttons">
                <Button className="btn-white btn-action" variant="contained">
                  Secondary Action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
