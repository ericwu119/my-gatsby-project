// Import react.js
import * as React from 'react'
import {Link}  from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo" 

// Define compoinent
const AboutPage = () => {
    return (
        <Layout>
        <Seo title="About Me" />
        <h1>About Me</h1>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </Layout>
    )
}

// export component
export default AboutPage