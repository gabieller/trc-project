import React, { useState } from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import Modal from "../components/ModalComponents/Modal"

export default function Test(props) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev=> !prev)
  }

  return (
    <Layout {...props}>
      <div className="container section ">
        <Button className="mt-5 btn-black" onClick={openModal}>
          GET STARTED
        </Button>
        <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
       
      </div>
    </Layout>
  )
}
