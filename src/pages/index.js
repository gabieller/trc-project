import React, { useState, Suspense, useEffect, useCallback } from "react"
import Button from "@material-ui/core/Button"
import Responsive from "../components/Responsive"

import Layout from "../components/Layout"
import Modal from "../components/ModalComponents/Modal"
import CardTeam from "../components/CardTeam"
import Demo from "../components/Demo"

import cnn from "../images/cnn_logo.svg"
import tech from "../images/tech_logo.svg"
import theverge from "../images/theverge_logo.svg"
import bbc from "../images/bbc_logo.svg"

import "../styles/index.css"
import { useStep } from "react-hooks-helper"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

const MediumIntegration = React.lazy(() =>
  import("../components/MediumIntegration")
)

const names = [
  "for simple on-demand transportation at the",
  "for launch the most efficient on-demand transportation system in",
  "for on-demand transit solved, at a scalable cost",
]

const final = [" right price.", " the world.", " per rider."]

export default function Home({ props, numberPosts }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)

  const [newName, setnewName] = useState("")
  const [newFinal, setnewFinal] = useState("")

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length)
    setnewName(names[index])
  }, [])

  const shuffleFinal = useCallback(() => {
    const indexFinal = Math.floor(Math.random() * final.length)
    setnewFinal(final[indexFinal])
  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3500)
    return () => clearInterval(intervalID)
  }, [shuffle])

  useEffect(() => {
    const intervalIDFinal = setInterval(shuffleFinal, 3500)
    return () => clearInterval(intervalIDFinal)
  }, [shuffleFinal])

  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>

          <div className="container title-content g-0 g-md-5">
            <div className="bg-white d-flex flex-column section-mini px-4 px-md-5 m-5 shadow-lg">
              <h1 className="title-green ps-md-5">
                <span className="wrap-text">
                  <span className="text-dark"> It’s time </span> <br />{" "}
                  <span className="text-change">{newName}</span>
                  <span className="text-dark text-decoration-underline">
                    {newFinal}
                  </span>
                </span>
              </h1>
              <div>
                {isModalVisible ? (
                  <div onClick={closeModalHandler} className="back-drop"></div>
                ) : null}

                <div className="action-buttons text-center">
                  <Responsive.Desktop>
                    <Button
                      className="mt-5 btn-black-modal"
                      onClick={openModal}
                    >
                      GET STARTED
                    </Button>
                  </Responsive.Desktop>
                  <Responsive.Mobile>
                    <Button
                      className="mt-5 btn-black-modal-mobile"
                      onClick={openModal}
                    >
                      GET STARTED
                    </Button>
                  </Responsive.Mobile>
                </div>

                <Modal
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                />
              </div>
            </div>
            <div className="row justify-content-center text-center g-0">
              <div className="col-md-12 col-xxl-9">
                <h3>
                  Our breakthrough routing technology has been featured in:
                </h3>
                <div className="row row-cols-1 row-cols-md-4 pb-5 d-flex justify-content-around pt-3 ">
                  <a
                    href="https://edition.cnn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-4"
                  >
                    {" "}
                    <img src={cnn} alt="CNN Logo" />{" "}
                  </a>
                  <a
                    href="https://techcrunch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-4"
                  >
                    {" "}
                    <img src={tech} alt="Tech Crunch Logo" />
                  </a>
                  <a
                    href="https://www.theverge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-4"
                  >
                    {" "}
                    <img src={theverge} alt="The Verge Logo" />
                  </a>
                  <a
                    href="https://www.bbc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-4"
                  >
                    {" "}
                    <img src={bbc} alt="BBC Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" team">
          <div className="section container pb-5 px-5">
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
