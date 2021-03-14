import React, { useState, Suspense } from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/Layout"
import Modal from "../components/ModalComponents/Modal"
import CardTeam from "../components/CardTeam"
import Demo from "../components/Demo"

import cnn from "../images/cnn_logo.svg"
import tech from "../images/tech_logo.svg"
import theverge from "../images/theverge_logo.svg"
import bbc from "../images/bbc_logo.svg"

import "../styles/index.css"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

const MediumIntegration = React.lazy(() =>
  import("../components/MediumIntegration")
)

export default function Home({ props, numberPosts }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)

  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>

          <div className="container  title-content g-0">
            <div className="bg-white d-flex flex-column section-mini ps-5 m-5 shadow-lg">
              <h1 className="title-green">
                <span className="wrap-text">
                  <span className="text-dark"> It’s time </span> <br /> for
                  simple on-demand <br /> transportation
                  <br /> at the{" "}
                  <span className="text-dark text-decoration-underline">
                    right price.
                  </span>
                </span>
              </h1>
              <div>
                {isModalVisible ? (
                  <div onClick={closeModalHandler} className="back-drop"></div>
                ) : null}

                <div className="action-buttons text-center">
                  <Button className="mt-5 btn-black-modal" onClick={openModal}>
                    GET STARTED
                  </Button>
                </div>

                <Modal
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                />
              </div>
            </div>
            <div className="row justify-content-center text-center g-0">
              <div className="col-8 col-md-9">
                {/* <div className="col-12"> */}
                <h3>
                  {/* <small> */}
                  Our breakthrough routing technology has been featured in:
                  {/* </small> */}
                </h3>
                <div className="d-flex col-md-12 pb-5 d-flex justify-content-around pt-3 ">
                  {/* <div className="pb-5"> */}
                  <img src={cnn} alt="CNN Logo" />
                  {/* </div> */}
                  {/* <div className="pb-5"> */}
                  <img src={tech} alt="Tech Crunch Logo" />
                  {/* </div> */}
                  {/* <div className="pb-5"> */}
                  <img src={theverge} alt="The Vergr Logo" />
                  {/* </div> */}
                  {/* <div > */}
                  <img src={bbc} alt="BBC Logo" />
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section team">
          <div className="container pb-5 ps-5">
            <div className="row g-0 col-md-6">
              <h2>Team</h2>
              <div className="col-md-8">
                We are a team of builders from technology, transportation,
                academia and public policy with a passion for helping cities
                unlock transit’s full potential.
              </div>
            </div>
          </div>

          <CardTeam />
        </div>

        <Demo />

        <div className="section-mini" style={{ background: "#F5F4F5" }}>
          <div className="container">
            <h3 className="col-8 col-md-12 pb-3 ms-3">
              Read about what TRC has been up to
            </h3>
            <Suspense fallback={<div />}>
              <MediumIntegration numberPosts={2} />
            </Suspense>
          </div>
        </div>
      </div>
    </Layout>
  )
}
