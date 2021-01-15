import React from "react"
import Button from "@material-ui/core/Button"

export default function Demo() {
  return (
    <div id="demo-component" className="section bg-white">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-12">
            <h2>
              <small>Are you curious to know more?</small>
            </h2>
            <h2>
              <small>Let’s schedule a demo!</small>
            </h2>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-11 col-md-6">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </div>
        </div>

        <div className="row g-0">
          <div className="col-12 col-md-5 pt-4">
            <div className="row action-buttons g-0">
              <div className="col-12 col-md-6 pb-4 pb-md-0">
                <div className="action-buttons">
                  <Button className="btn-black btn-action" variant="contained">
                    Contact Sales
                  </Button>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="action-buttons">
                  <Button
                    className="btn bg-white rounded-0 btn-action"
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
    </div>
  )
}
