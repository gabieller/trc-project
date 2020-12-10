import React from "react"

import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

export default function DownloadButtons () {
    return (
        <div className="download-badges">
            <div className="download-button">
              <button className={`btn btn-link pl-2`}>
                <img
                  src={googleplaybadge}
                  alt="Google Play Download"
                  width="135"
                  height="60"
                />
              </button>
              <button className={`btn btn-link`}>
                <img
                  src={appstorebadge}
                  alt="App Store Download"
                  width="120"
                  height="50"
                />
              </button>
            </div>
          </div>
    )
}
