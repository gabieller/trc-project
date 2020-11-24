import React from "react"
import Layout from "../components/Layout"

import "../styles/index.css"


export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index">
        <div className="row-title">
        <div className="row justify-content-md-center">
          <h1 className="title">Transportation that</h1>
        </div>
        <div className="row justify-content-md-center">
          <h1 className="title">moves with you</h1>
        </div>
        </div>

        <div className="row-title">
        <div className="row justify-content-md-center">
          <h1 className="title">Transportation that</h1>
        </div>
        <div className="row justify-content-md-center">
          <h1 className="title">moves with you</h1>
        </div>
        </div>

      </div>
    </Layout>
  )
}
