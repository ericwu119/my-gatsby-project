// Import react.js
import * as React from 'react'
import [Link] from 'gatsby'

// Define compoinent
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <Link to="/">Back to Home</Link>
        </main>
    )
}

// export component
export default AboutPage