import React, { useState, useRef } from "react"
import { useEffectOnlyOnce } from "../utils/hooks"
import "../styles/arrow.css"

export default function Arrow({ className }) {
  const [percentage, setPercentage] = useState(0)
  const [showArrow, setShowArrow] = useState(false)
  const selectedDiv = useRef(null)

  useEffectOnlyOnce(() => {
    const onScroll = () => {
      if (selectedDiv.current) {
        const { scrollTop } = document.documentElement
        const { scrollHeight, offsetTop } = selectedDiv.current
        const bottomGoal = scrollHeight / 2 + offsetTop
        const newValue = (scrollTop / bottomGoal) * 100
        setPercentage(newValue >= 100 ? 100 : newValue)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  useEffectOnlyOnce(() => {
    const checkArrow = () => {
      if (!showArrow && window.pageYOffset > 0) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    }
    window.addEventListener("scroll", checkArrow)
    return () => window.removeEventListener("scroll", checkArrow)
  })

  const arrowTip = `line ${showArrow ? "visible" : "invisible"}`
  return (
    <div
      className="rolling-arrow col-md-2  justify-content-center d-flex"
      ref={selectedDiv}
    >
      <div
        className="arrow2 d-none d-md-block"
        style={{ height: `calc(0px + ${percentage}%)` }}
      >
        <span className={`line-1 ${arrowTip}`} />
        <span className={`line-2 ${arrowTip}`} />
      </div>
    </div>
  )
}
