import React, { useState, useRef, Suspense } from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/Layout"
import Modal from "../components/ModalComponents/Modal"
import CardTeam from "../components/CardTeam"
import Demo from "../components/Demo"

// import CookieConsent from "../components/CookieConsent"

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

export default function Home(props) {
  // const [dropDown, setDropDown] = useState([])
  // const modalRef = useRef(null)

  // const toggleDropdown = () => {
  //   console.log("show")
  //   //se clicar no botão, modal aparece
  //   setDropDown("show")
  //   document.body.addEventListener("click", closeDropdown)
  // }

  // const closeDropdown = event => {
  //   event.stopPropagation() //impede de executar listeners dos filhos
  //   const contain = modalRef.current.contains(event.target)
  //   if (!contain) {
  //     //se clicar fora do modal, ele DESaparece
  //     console.log("hidden")
  //     setDropDown("")
  //     document.body.removeEventListener("click", closeDropdown)
  //   }
  // }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  return (
    <Layout {...props}>
      <div id="index" className="container-fluid">
        <div className="section title justify-content-left">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>

          <div className="container title-content g-0">
            <div className="bg-white d-flex flex-column section-mini">
              <h1>
                It’s time <br /> for simple on-demand <br /> transportation
                <br /> at the right price.
              </h1>
              <div className="action-buttons">
                {/* <Button
                  className="btn-black btn-action"
                  variant="contained"
                  onClick={toggleDropdown}
                >
                  GET STARTED
                </Button> */}
                <Button className="mt-5 btn-black" onClick={openModal}>
                  GET STARTED
                </Button>
              </div>
              <Modal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
            <div className="row justify-content-center g-0">
              <div className="col-md-9">
                <div className="col-12">
                  <h3>
                    Our breakthrough routing technology has been featured in:
                  </h3>
                  <div className="d-flex justify-content-around pt-3">
                    <img src={cnn} alt="CNN Logo" />
                    <img src={tech} alt="Tech Crunch Logo" />
                    <img src={theverge} alt="The Vergr Logo" />
                    <img src={bbc} alt="BBC Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section team">
          <div className="container pb-5">
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
            <h3 className="col-8 col-md-12 pb-3">
              Read about what TRC has been up to
            </h3>
            <Suspense fallback={<div />}>
              <MediumIntegration />
            </Suspense>
          </div>
        </div>
      </div>
    </Layout>
  )
}
