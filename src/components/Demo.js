import React from "react"
import Button from "@material-ui/core/Button"

export default function Demo() {
  return (
    <div id="demo-component" className=" row section-mini d-flex flex-column">
      <div className="row g-0 text-center">
        <h2 className="fs-1 pb-4 text-hover">
          Are you <span className="underline-right text-green">curious</span> to
          know more?
        </h2>
      </div>

      <div className="d-inline-flex g-0 text-center  ">
        <div className="row col-8 action-buttons g-0 d-flex justify-content-center">
          <div className="col-12 col-md-3 col-xxl-2 pb-4 pb-md-0 d-flex justify-content-around">
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                GET STARTED
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-3 col-xxl-2 pb-4 pb-md-0 d-flex justify-content-around">
            <div className="action-buttons">
              <Button
                className="btn-white rounded-0 btn-action"
                variant="contained"
              >
                WHY TRC
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
