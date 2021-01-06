import React from "react"
import Button from "@material-ui/core/Button"

import "../styles/demo.css"

export default function Demo() {
  return (
    <div id="demo-component" className="pl-5">
      <div className="row container justify-content-center px-0 contact-us-title">
        <div className="col-xl-10 px-xl-0"> 
          <div className="col-md-6 justify-content-left demo-title">
            <h2 className="col-xl-12 pl-md-5 px-xl-0">Are you curious to know more?</h2>
            <h2 className="col-xl-12 pl-md-5 px-xl-0">Let’s schedule a demo!</h2>
          </div>
        </div>
      </div>
      <div className="row container justify-content-center px-0 contact-us-subtitle py-3">
        <div className="col-xl-10 px-xl-0 col-md-6 col-sm-12 justify-content-left">
          <div className="col-xl-6 pl-md-5 px-xl-3">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
          </div>
        </div>
      </div>

      <div className="row container justify-content-center demo-buttons pt-4">
        <div className="col-xl-10 px-xl-0">
          <div className="action-buttons row">
            <div className="action-buttons pr-3">
              <Button className="btn-black btn-action" variant="contained">
                Primary Action
              </Button>
            </div>
            <div className="action-buttons">
              <Button className="btn btn-raised btn-secondary">
                Secondary Action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
