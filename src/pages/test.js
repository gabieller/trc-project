import React from "react"
import Layout from "../components/Layout"
import MultiStepForm from "../components/ModalComponents/MultiStepForm"


export default function Test(props) {
  return (
    <Layout {...props}>
      <div className="container section ">
        <MultiStepForm />
      </div>
    </Layout>
  )
}
