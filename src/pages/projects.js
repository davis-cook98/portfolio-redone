import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div><Link to="/"> Return home </Link></div>
    <div>Projects I am currently working on:</div>
    <div>- Getting this to automatically update</div>
    <div> For all other projects please look at my <a href={"https://github.com/davis-cook98"}> github </a></div>
  </Layout>
)

export default ProjectsPage