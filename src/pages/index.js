import React from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"
import "../styles/index.css"
import arrowLeft from "../images/keyboard_arrow_left-24px.svg"
import arrowRight from "../images/keyboard_arrow_right-24px.svg"

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

function Reference({ title, description }) {
  return (
    <div className="quote col-12 col-md-5 my-2 mx-2">
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <div className="card-text text-center">
          <div>{description}</div>
          <div className="font-weight-bolder mt-2">Connie Robertson</div>
        </div>
      </div>
    </div>
  )
}

export default function Home(props) {
  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <h1 className="text-center">
                We partner with cities to power the future of public transit
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <h2 className="text-center">
                Et has minim elitr intellegat at nam minimum ponderum
              </h2>
            </div>
          </div>
          <div className="action-buttons row justify-content-around col-12 col-lg-8 col-xl-4">
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                Primary Action
              </Button>
            </div>
            <div className="action-buttons">
              <Button className="btn-black btn-action" variant="contained">
                Secondary Action
              </Button>
            </div>
          </div>
        </div>
        <div className="section features">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 my-2">
              <h3 className="text-center">
                Grow your business with better shipping
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 my-2 mb-3">
              <div className="text-center">
                We help the world's leading organizations follow their shipping
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Card
              title="Shipping communication"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
            <Card
              title="Marketing resources"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
            <Card
              title="Logistic Performances"
              description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed."
            />
          </div>
        </div>
        <div className="section quotes">
          <div className="row justify-content-center">
            <div
              id="carouselQuotes"
              className="carousel slide col-12"
              // data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner container">
                <div className="carousel-item active">
                  <div className="row justify-content-center">
                    <Reference
                      title="Marketing resources"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo mi. Suspendisse vel elementum erat, ac lacinia massa. Pellentesque neque sem, viverra sit amet euismod sed, fringilla quis metus. Integer justo nibh, aliquam sed enim a, varius elementum ligula. Quisque pellentesque porttitor venenatis."
                    />
                    <Reference
                      title="Marketing resources"
                      description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo mi. Suspendisse vel elementum erat, ac lacinia massa. Pellentesque neque sem, viverra sit amet euismod sed, fringilla quis metus. Integer justo nibh, aliquam sed enim a, varius elementum ligula. Quisque pellentesque porttitor venenatis."
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <Reference
                      title="Marketing resources"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo mi. Suspendisse vel elementum erat, ac lacinia massa. Pellentesque neque sem, viverra sit amet euismod sed, fringilla quis metus. Integer justo nibh, aliquam sed enim a, varius elementum ligula. Quisque pellentesque porttitor venenatis."
                    />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselQuotes"
                role="button"
                data-slide="prev"
              >
                <img src={arrowLeft} alt="hamburger menu" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselQuotes"
                role="button"
                data-slide="next"
              >
                <img src={arrowRight} alt="hamburger menu" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
