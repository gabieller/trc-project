import React from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"
import CardTeam from "../components/CardTeam"

import "../styles/team.css"

export default function Team(props) {
  return (
    <Layout {...props}>
      <div id="team">
        <div className="container-fluid">
          <div className="section title">
            <div className="container title-content">
              <div className="row">
                <div className="col-12 col-md-8">
                  <h1>
                    A world-class team focused on
                    <p className="green">solving transportation problems</p>
                  </h1>
                </div>
              </div>
              <div className="row justify-content-left">
                <div className="col-12 col-md-6">
                  We are a team of builders from technology, transportation,
                  academia and public policy with a passion for helping cities
                  unlock transit’s full potential.
                </div>
              </div>
            </div>
          </div>
          <CardTeam id="card-team" />
          <Demo />
        </div>
      </div>
    </Layout>
  )
}
