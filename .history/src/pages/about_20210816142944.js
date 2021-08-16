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
        <Link to="/">Back to Home</Link>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <p>
        </p>
      </Layout>
    )
}

// export component
export default AboutPage