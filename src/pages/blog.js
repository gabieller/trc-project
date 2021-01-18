import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import "../styles/blog.css"

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
// var my_script_mobile = widgetDownload(
//   "https://medium-widget.pixelpoint.io/widget.js"
// )

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
            ratio: "square",
          },
        })
      }, 300)
    })
  }, [])

  return (
    <Layout {...props}>
      <div id="medium" className="container-fluid">
        <div className="section-mini">
          <div className="container">
            <h1 className="col-8 col-md-12">What we have been up to</h1>
            <div id="medium-widget" className="" />
          </div>
        </div>
      </div>
      <Demo />
    </Layout>
  )
}
