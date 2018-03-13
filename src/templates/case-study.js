import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Social from '../components/Social'


class CaseStudyTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.client}</p>
        {/* <p>
          {post.frontmatter.date}
        </p> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link className="button" to="/case-studies">more case studies</Link>
        <Social />
      </div>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        client
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
