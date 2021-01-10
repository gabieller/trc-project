import React from "react"
import Layout from "../components/Layout"
import CanvasPingo from "../components/CanvasPingo"

export default function Test(props) {
  return (
    <Layout {...props}>
      <CanvasPingo />
    </Layout>
  )
}
