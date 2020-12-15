import React from "react"
import anime from "animejs"

import "../styles/test.css"

export default function Anime() {
  

  const animateText = () => {
    anime({
      targets: ".anime__label",
      translateX: "250px",
      rotate: "1turn",
      backgroundColor: "#FF6138",
      duration: 800,
      direction: "alternate",
    })
  }

  return (
    <div id="test-page">
      <div className="anime">
          <button className="anime__button" onClick={animateText}>animate text</button>
          <p className="anime__label">action</p>
        </div>
    </div>
  )
}
