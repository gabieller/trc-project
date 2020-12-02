import React from "react"

import "../styles/card.css"

export default function Card({ title, description }) {
    // TODO: make discover link sticky to bottom
    return (
        <div className="card bg-white col-11 col-md-4 col-lg-2 my-2 mx-2">
          <div className="card-body">
            <h5 className="card-title text-center font-weight-bold">{title}</h5>
            <div className="card-text text-center">
              <div className="my-3">{description}</div>
              <div>
                <a href="/">Discover</a>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
