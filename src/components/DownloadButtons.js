import React from "react"
import Button from "@material-ui/core/Button"

import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

// TODO: delete
export default function DownloadButtons() {
  return (
    <div className="download-badges">
      <div className="download-button">
        <Button className={`btn btn-link ps-2`}>
          <img
            src={googleplaybadge}
            alt="Google Play Download"
            width="135"
            height="60"
          />
        </Button>
        <Button className={`btn btn-link`}>
          <img
            src={appstorebadge}
            alt="App Store Download"
            width="120"
            height="50"
          />
        </Button>
      </div>
    </div>
  )
}
