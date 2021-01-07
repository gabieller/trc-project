import React from "react"
import Button from "@material-ui/core/Button"

import "../styles/demo.css"

export default function Demo() {
  return (
    <div id="demo-component">
      <div className="row container px-0 contact-us-title">
        <div className="col-xl-12 px-xl-0">
          <h2 className="col-xl-12 px-xl-0">
            <small>Are you curious to know more?</small>
          </h2>
          <h2 className="col-xl-12 px-xl-0">
            <small>Let’s schedule a demo!</small>
          </h2>
        </div>
      </div>
      <div className="row container px-0 contact-us-subtitle">
        <div className="col-xl-12 px-xl-0">
          <div className="col-xl-6 px-xl-0">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </div>
        </div>
      </div>
      <div className="row container  demo-buttons pt-4 px-0">
        <div className="col-xl-8 px-xl-0">
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

{/* <div className="row container justify-content-center buttons pb-5">
<div className="col-xl-8">
  <div className=" justify-content-center pt-md-3 pt-xs-2">
    <div className="action-buttons row pl-3">
      <div className="action-buttons pr-3">
        <Button
          className="btn-black btn-action"
          variant="contained"
        >
          Primary Action
        </Button>
      </div>
      <div className="action-buttons pl-3">
        <Button className="btn btn-raised btn-secondary">
          Secondary Action
        </Button>
      </div>
    </div>
  </div>
</div>
</div>  */}