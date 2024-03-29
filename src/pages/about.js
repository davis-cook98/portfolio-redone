import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div><Link to="/"> Return home </Link></div>
    <div>
        Hi! My name is Davis Cook, I am currently in New Jersey, and I enjoy working on projects relating to data analysis and 
        machine learning. I graduated from Seton Hall University in 2020 with a major in Computer Science and I currently work
        as an Intermediate Applications Developer. While at Seton Hall, I had a <a href={'/Article.pdf'}>paper</a> accepted  
        to DSAA 2020 on automated intrusion detection. If you are interested in connecting with me, please reach out below.
    </div>
    <div>
        <a href="https://www.linkedin.com/in/davis-cook/"> linkedin </a> 
        or <a href={"mailto:daviscook@outlook.com"}> email me  </a>
    </div>
  </Layout>
)

export default AboutPage
