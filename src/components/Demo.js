import React from "react"
import Button from "@material-ui/core/Button"

export default function Demo() {
  return (
    <div id="demo-component" className="section bg-white">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-12">
            <h2>
              <small>Are you curious to know more?</small>
            </h2>
            <h2>
              <small>Let’s schedule a demo!</small>
            </h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-11 col-md-6">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-8 pt-4">
            <div className="action-buttons row d-inline-flex">
              <div className="action-buttons pr-3">
                <Button className="btn-black btn-action" variant="contained">
                  Primary Action
                </Button>
              </div>
              <div className="action-buttons pr-3">
                <Button
                  className="btn bg-transparent btn-action rounded-0"
                  variant="contained"
                >
                  Secondary Action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
