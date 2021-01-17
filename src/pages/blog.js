import React, { useEffect } from "react"
import Layout from "../components/Layout"

function widgetDownload(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script")
    script.src = src
    script.addEventListener("load", function () {
      resolve()
    })
    script.addEventListener("error", function (e) {
      reject(e)
    })
    document.body.appendChild(script)
  })
}

var my_script = widgetDownload("https://medium-widget.pixelpoint.io/widget.js")

export default function (props) {
  useEffect(() => {
    my_script.then(e => {
      setInterval(() => {
        window.MediumWidget.Init({
          renderTo: "#medium-widget",
          params: {
            resource: "https://medium.com/routable-ai",
            postsPerLine: 2,
            limit: 4,
            picture: "big",
            fields: ["description", "author", "claps", "publishAt"],
            ratio: "landscape",
          },
        })
      }, 300)
    })
  }, [])

  return (
    <Layout {...props}>
      <div id="medium-widget" />
    </Layout>
  )
}
