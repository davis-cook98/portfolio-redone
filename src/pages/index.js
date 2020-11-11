import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>hi</div>
    <div>my name is davis cook</div>
    <div>welcome to my website</div>
    <div><Link to="/about/"> about </Link></div>
    <div><Link to="/projects/"> projects </Link></div>
  </Layout>
)

export default IndexPage
