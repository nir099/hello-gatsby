import React from 'react'
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

const BlogPage = ({data}) => {
  return (
    <div>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map( post => (
        <div key= { post.node.id } >
            <h3>{post.node.frontmatter.title}</h3>
            <small>posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <Link to = {post.node.frontmatter.path}>Read More</Link>
            <br />
        </div>
    ))}
    </div>
  )
}

export const pageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
    }
}`

export default BlogPage; 
