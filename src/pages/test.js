import React from "react"
import Layout from "../components/Layout"
import UserForm from "../components/UserForm"

export default function Test(props) {
  return (
    <Layout {...props}>
      <div className="container section ">
        <UserForm />
      </div>
    </Layout>
  )
}
