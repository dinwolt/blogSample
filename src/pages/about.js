import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const About = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const siteDescription = data.site.siteMetadata?.description || "Description"

  return (
    <Layout title={siteTitle}>
      <h1>About Us</h1>
      <p>{siteDescription}</p>
    </Layout>
  )
}

export default About

// Optional: SEO metadata
export const Head = () => <Seo title="About" />
