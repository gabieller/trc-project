import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import empty from "../images/img-empty.png"
import suitcase from "../images/suitcase.svg"
import key from "../images/key.svg"
import cube from "../images/cube.svg"
import truck from "../images/truck.svg"

import "../styles/solutions.css"

function Card({ title, description }) {
  // TODO: make discover link sticky to bottom
  return (
    <div className="card bg-white col-11 col-md-4 col-lg-2 my-2 mx-2">
      <div className="card-body">
        <h5 className="card-title text-center font-weight-bold">{title}</h5>
        <div className="card-text text-center">
          <div className="my-3">{description}</div>
          <div>
            <a href="/">Discover</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="solutions-page">
        <div id="solutions-header">
          <div className="row container solutions-header-title">
            <div className="col justify-content-left solutions-title pb-3">
              <h2>How we can help</h2>
            </div>
          </div>
          <div className="row container solutions-subtitle">
            <div className="col-md-7 col-sm-12 justify-content-left">
              <h4>
                The Routing Company is focused on partnering with cities,
                transit authorities and operators to make transit more dynamic,
                more reliable and more accessible.
              </h4>
            </div>
          </div>
        </div>

        <div id="solutions-card">
          <div className="row justify-content-center">
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

        <div id="solutions-products">
          <div className="row container">
            <div className="col-md-5 img-products">
              <img
                className="empty-products py-5"
                src={empty}
                alt="Products"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-7 products">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={suitcase}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={key}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={cube}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className="products-img pb-3"
                    src={truck}
                    alt="Products Icon"
                  />
                  <div className="row">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row container py-5 ">
            <div className="row container solutions-products-title pl-0">
              <div className="col-md-6 justify-content-left solutions-title pb-3">
                <h2>Ad eos saepe lucilius, noster postulant philosophia.</h2>
              </div>
            </div>
            <div className="row container solutions-products-subtitle pl-0">
              <div className="col-md-6 col-sm-12 justify-content-left">
                <h5>
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                  ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                  audiam animal molestiae te. Ex duo eripuit mentitum.
                </h5>
              </div>
            </div>
            <div className="row container solutions-products-buttons pl-0">
              <div className=" justify-content-left pt-3">
                <div className="action-buttons row pl-3">
                  <div className="action-buttons pr-3">
                    <Button
                      className="btn-black btn-action"
                      variant="contained"
                    >
                      Primary Action
                    </Button>
                  </div>
                  <div className="action-buttons">
                    <Button
                      className="btn-black btn-action"
                      variant="contained"
                    >
                      Secondary Action
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
