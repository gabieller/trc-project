import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import cardImage from "../images/card-example.png"
import quote from "../images/quote.svg"
import empty from "../images/img-empty.png"
import icon from "../images/icon.svg"

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
              <h4>
                Our team is happy to answer all your questions. Please, fill out
                the form and we’ll be in touch as soon as possible.
              </h4>
            </div>
          </div>
        </div>

        <div id="about-page-second" className="about-card">
          <div className="row container justify-content-center">
            <div className="card  bg-transparent m-5">
              <img className="card-img-top" src={cardImage} alt="Card  cap" />
              <div className="card-body pl-0">
                <h4 className="card-title">Periculis Omittan</h4>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <img src={icon} alt="icon" width="36" height="36" />
              </div>
            </div>
            <div className="card  bg-transparent m-5">
              <img className="card-img-top" src={cardImage} alt="Card  cap" />
              <div className="card-body pl-0">
                <h4 className="card-title">Periculis Omittan</h4>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <img src={icon} alt="icon" width="36" height="36" />
              </div>
            </div>
            <div className="card bg-transparent m-5">
              <img className="card-img-top" src={cardImage} alt="Card  cap" />
              <div className="card-body pl-0">
                <h4 className="card-title">Periculis Omittan</h4>
                <p className="card-text">
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                </p>
                <img src={icon} alt="icon" width="36" height="36" />
              </div>
            </div>
          </div>
        </div>

        <div id="about-page-third">
          <div className="row container justify-content-center about-quotes p-5 col-md-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card text-center bg-transparent m-5">
                    <img
                      className="card-img-top"
                      src={quote}
                      alt="Card cap"
                      width="100"
                      height="100"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Est tation latine aliquip id, mea ad tale illud
                        definitiones. Periculis omittantur reformidans
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
                    <img
                      className="card-img-top"
                      src={quote}
                      alt="Card cap"
                      width="100"
                      height="100"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Est tation latine aliquip id, mea ad tale illud
                        definitiones. Periculis omittantur reformidans
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card text-center bg-transparent m-5">
                    <img
                      className="card-img-top"
                      src={quote}
                      alt="Card cap"
                      width="100"
                      height="100"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Est tation latine aliquip id, mea ad tale illud
                        definitiones. Periculis omittantur reformidans
                        necessitatibus eum ad, pro eripuit minimum comprehensam
                        ne, usu cu stet prompta.
                      </p>
                      <h4 className="card-title">Connie Robertson at Google</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about-page-fourth">
          <div className="row container justify-content-center newsletter">
            <div className="col-md-6">
              <img
                className="empty pt-5"
                src={empty}
                alt="Newsletter Image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 py-5">
              <div className="newsletter-title font-weight-bold pt-5">
                <h2>Follow our latest news</h2>
                <h2>Sign up for our newsletter</h2>
              </div>
              <div className="newsletter-text py-4">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="| Enter your email"
                  aria-label="| Enter your email"
                />
                <div className="input-group-append">
                  <Button className="btn-black" variant="contained">
                    Primary Action
                  </Button>
                </div>
              </div>
              <h5 className="warning-text">
                By clicking “Primary action” you accepting ipsum dolor sit amet,
                sit ea brute mediocritatem, eu sed aliquam scripserit
                dissentiunt.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
