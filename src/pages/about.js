import React from "react"
import Layout from "../components/Layout"

import cardImage from "../images/card-example.png"

import "../styles/about.css"

export default function About(props) {
  return (
    <Layout {...props}>
      <div id="about-page">
        <div id="about-page-first">
          <div className="row container about-title">
            <div className="col-md-8 justify-content-left about-title pt-5">
              <h2>
                A world-class team focused on solving transportation problems
              </h2>
            </div>
          </div>
          <div className="row container about-subtitle">
            <div className="col-md-6 col-sm-12 justify-content-left pt-3">
              <h3>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h3>
            </div>
          </div>
        </div>

        <div id="about-page-second">
          <div className="row container justify-content-center about-card">
            <div className="card m-5">
              <img
                className="card-img-top"
                src={cardImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Periculis Omittan</h5>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card m-5">
              <img
                className="card-img-top"
                src={cardImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Periculis Omittan</h5>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card m-5">
              <img
                className="card-img-top"
                src={cardImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Periculis Omittan</h5>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="about-page-third">
          <div className="row container about-quotes py-5">
            <div className="col-md-6 justify-content-center"></div>
            Est tation latine aliquip id, mea ad tale illud definitiones.
            Periculis omittantur reformidans necessitatibus eum ad, pro eripuit
            minimum comprehensam ne, usu cu stet prompta.
          </div>
        </div>
      </div>
    </Layout>
  )
}
