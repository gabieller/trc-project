import React from "react"
import Button from "@material-ui/core/Button"

export default function Demo() {
  return (
    <div id="demo-component" className="section">
      <div className="container">
        <div className="px-0">
          <div className="col-xl-12 px-xl-0">
            <h2 className="col-xl-12 px-xl-0">
              <small>Are you curious to know more?</small>
            </h2>
            <h2 className="col-xl-12 px-xl-0">
              <small>Let’s schedule a demo!</small>
            </h2>
          </div>
        </div>
        <div className="px-0">
          <div className="col-xl-12 px-xl-0">
            <div className="col-xl-6 px-xl-0">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </div>
          </div>
        </div>
        <div className="pt-4 px-0">
          <div className="col-xl-8 px-xl-0">
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
