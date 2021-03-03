import React, { useEffect } from "react"

export default function () {
  useEffect(() => {
    window.MediumWidget.Init({
      renderTo: "#medium-widget",
      params: {
        resource: "https://medium.com/routable-ai",
        postsPerLine: 2,
        limit: 4,
        picture: "big",
        fields: ["description", "author", "claps", "publishAt"],
        ratio: "square",
      },
    })

    return () => {
      window.MediumWidget.unmount()
    }
  }, [])

  return (
    <div id="medium" className="container-fluid">
      <div className="container">
        <div id="medium-widget" />
      </div>
    </div>
  )
}
