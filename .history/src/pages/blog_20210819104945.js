import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    return (
        <Layout pageTitle = "My Blog Posts">
            <p>My cool posts wil go in here</p>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default BlogPage