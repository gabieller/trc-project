import React, { useState } from "react"
import { Link } from "gatsby"

import "../styles/navbar-pingo.css"

export default function NavBar() {
  const [inHover, setHover] = useState(0)

  const urls = [
    { name: "ABOUT", url: "pingo-content" },
    { name: "WHO BUILD", url: "pingo-about" },
    { name: "WHERE YOU FIND", url: "pingo-content" },
    { name: "GET PINGO", url: "pingo-content" },
  ]
  const underlineStyle = {
    width: `${100 / urls.length}%`,
    transform: `translate3d(${inHover * 100}%, 0, 0)`,
  }
  return (
    <ul className="row navbar-pingo nav d-flex ">
      {[1, 2, 3].map(i => (
        <div key={i} className="underline" style={underlineStyle} />
      ))}
      {urls.map(({ name, url }, index) => (
        <Link
          key={name}
          to={`#${url}`}
          className="nav-item"
          onMouseEnter={() => setHover(index)}
        >
          {name}
        </Link>
      ))}
    </ul>
  )
}
