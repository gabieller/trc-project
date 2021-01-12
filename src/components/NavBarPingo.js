import React, { useState } from "react"
import { Link } from "gatsby"

import "../styles/navbar-pingo.css"

export default function NavBar({ tabs, selected }) {
  const [inHover, setHover] = useState(
    selected >= 0 && selected < tabs.length ? selected : 0
  )
  const underlineStyle = {
    width: `${100 / tabs.length}%`,
    transform: `translate3d(${inHover * 100}%, 0, 0)`,
  }
  return (
    <ul className="row navbar-pingo nav d-flex ">
      {[1, 2, 3].map(i => (
        <div key={i} className="underline" style={underlineStyle} />
      ))}
      {tabs.map(({ name, url }, index) => (
        <Link
          key={name}
          to={`#${url}`}
          className="nav-item"
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(selected)}
        >
          {name}
        </Link>
      ))}
    </ul>
  )
}
