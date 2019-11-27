import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page Not Found" />
      <h1>Hmmm, something went wrong.</h1>
      <p>
        <Link to="/">Back to homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
