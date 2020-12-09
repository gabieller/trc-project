import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Button from "@material-ui/core/Button"

import map from "../images/map.png"
import solutionslines from "../images/solutions-img-lines.png"
import arrow from "../images/arrow.svg"
import empty from "../images/img-empty.png"
import suitcase from "../images/suitcase.svg"
import key from "../images/key.svg"
import cube from "../images/cube.svg"
import truck from "../images/truck.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.svg"

import "../styles/solutions.css"

export default function Solutions(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page">
        <div id="solutions-header">
          <div className="row container solutions-header-title">
            <div className="col justify-content-left solutions-title">
              <h2>How we can help</h2>
            </div>
          </div>
          <div className="row justify-content-center solutions-header-card py-4">
            <Card
              title="Demand-responsive Transit"
              description="Many transit authorities worldwide 
              experimenting with on demand buses 
              and shuttles. The Routing Company will 
              make these efforts possible in real time. "
            />
            <Card
              title="Ridesharing
              Companies"
              description="It’s not easy to build an efficient pooling 
              product. Use The Routing Company to solve 
              the problem, reduce engineering costs 
              and get to market faster."
            />
            <Card
              title="Transit & Para-transit (WAV) Authorities"
              description="Wait times are typically far higher for those
              who needs WAVs. The Routing Company 
              can help your operators improve the
              experience of those in most need."
            />
          </div>
        </div>

        <div id="solutions-how-it-works">
          <div className="row p-0">
            <div className="col-md-7 border border-dark border-right-0 title">
              <h2 className="justify-content-left">How it works</h2>
              <div className="col-md-8 p-0">
                We dynamically routes shared rides in real time through a fleet
                management dashboard, a rider app and a driver app, all powered
                by MIT-born technology. It’s easy to use and built for speed at
                city-wide scale.
              </div>
            </div>
            <div className="col-md-5 p-0">
              <img src={map} alt="Map" className="fill border border-dark" />
            </div>
          </div>
        </div>

        <div id="solutions-lines">
          <div className="row">
            <div className="col-md-5 p-0 border-bottom border-dark">
              <div>
                <img src={solutionslines} width="574" height="800" />
              </div>
            </div>

            <div className="col-md-2 border-dark border-left border-bottom">
              <div className="arrow-interaction text-center">
                <img src={arrow} alt="Arrow Interaction" />
              </div>
            </div>

            <div className="col-md-5 border-left border-bottom border-dark pt-5">
              <div className="row container py-5 col-md-8">
                <h3 className="pb-3">1. We partner with you</h3>
                We work with you to build solutions that are tailor-made to your
                transit needs.
              </div>
              <div className="row container ">
                <div className="row container py-5 col-md-8">
                  <h3 className="pb-3">2. Our routing engine gets to work</h3>
                  You get access to tools and technology that calculate the most
                  optimal routes for your vehiclís and rides in real time.
                </div>
              </div>
              <div className="row container">
                <div className="row container py-5 col-md-8">
                  <h3 className="pb-3">
                    3. Less stress, more time and money saved
                  </h3>
                  Riders enjoy lower wait times and more reliable service.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="solutions-products">
          <div className="row container products-title">
            <h2>Our Products</h2>
          </div>
          <div className="d-flex flex-row container products pt-5">
            <div className="col-md-4">
              <img
                className="products-img pb-3"
                src={key}
                alt="Products Icon"
              />
              <div className="row">
                Rider & Driver Apps Mea aeterno eleifend antiopam ad, nam no
                suscipit quaerendum.
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="products-img pb-3"
                src={cube}
                alt="Products Icon"
              />
              <div className="row">
                Fleet Management & Analytics Dashboard Mea aeterno eleifend
                antiopam ad, nam no suscipit quaerendum.
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="products-img pb-3"
                src={truck}
                alt="Products Icon"
              />
              <div className="row">
                On-demand Routing API Mea aeterno eleifend antiopam ad, nam no
                suscipit quaerendum.
              </div>
            </div>
          </div>
        </div>

        <div id="pingo-solutions">
          <div className="row container border border-dark">
            <div className="col-md-7 pb-5 border-right border-dark text-center">
              <img
                className="empty pt-5"
                src={empty}
                alt="Empty"
                width="450"
                height="450"
              />
            </div>
            <div className="col-md-5 py-5">
              <div className="row container">
                <h2 className="pt-5 font-weight-bold">Pingo</h2>
                <h3>Transit that moves with you</h3>
              </div>
              <div className="row container pr-3 pt-3">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
                <div className="action-buttons pr-3 pt-3">
                  <Button className="btn-black" variant="contained">
                    Primary Action
                  </Button>
                </div>
              </div>
              <div className="download-badges">
                <div className="download-button pt-3">
                  <button className={`btn btn-link pl-2`}>
                    <img
                      src={googleplaybadge}
                      alt="Google Play Download"
                      width="130"
                      height="60"
                    />
                  </button>
                  <button className={`btn btn-link`}>
                    <img
                      src={appstorebadge}
                      alt="App Store Download"
                      width="115"
                      height="50"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-us-products" className="pl-5">
          <div className="row container contact-us-title pl-0">
            <div className="col-md-6 justify-content-left contact-us-title pb-3">
              <h2>Ad eos saepe lucilius, noster postulant philosophia.</h2>
            </div>
          </div>
          <div className="row container contact-us-subtitle pl-0">
            <div className="col-md-6 col-sm-12 justify-content-left">
              <h4>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </h4>
            </div>
          </div>
          <div className="row container contact-us-buttons pl-0">
            <div className=" justify-content-left pt-3">
              <div className="action-buttons row pl-3">
                <div className="action-buttons pr-3">
                  <Button className="btn-black btn-action" variant="contained">
                    Primary Action
                  </Button>
                </div>
                <div className="action-buttons">
                  <Button className="btn-white btn-action" variant="contained">
                    Secondary Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
