import React from "react"

import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

export default function DownloadButtons() {
  return (
    <div className="d-flex flex-column download-badges ">
      <div className="d-flex flex-column download-button col-xs-4 pl-5">
        <button className={`btn btn-link pl-2`}>
          <img
            src={googleplaybadge}
            alt="Google Play Download"
            width="110"
            height="50"
          />
        </button>
        <button className={`btn btn-link`}>
          <img
            src={appstorebadge}
            alt="App Store Download"
            width="100"
            height="50"
          />
        </button>
      </div>
    </div>
  )
}
