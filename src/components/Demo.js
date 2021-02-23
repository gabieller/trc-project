import React from "react"
import Button from "@material-ui/core/Button"

export default function Demo() {
  return (
    <div id="demo-component" className="section d-flex flex-column">
      <div className="row g-0">
        <h2 className="fs-1 pb-4">
          Are you <u>curious</u> to know more?
        </h2>
      </div>

      <div className="row g-0">
        {/* <div className="col-12 col-md-5 pt-4"> */}
        <div className="row action-buttons g-0">
          <div className="col-12 col-md-6 pb-4 pb-md-0">
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                GET STARTED
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="action-buttons">
              <Button className="btn  rounded-0 btn-action" variant="contained">
                WHY TRC
              </Button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
