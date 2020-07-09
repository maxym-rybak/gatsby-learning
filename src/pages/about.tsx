import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head title={"About"} />
      <h1>About</h1>
      <p>About info</p>
    </Layout>
  )
}

export default AboutPage
