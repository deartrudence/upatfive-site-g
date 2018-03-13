import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Social from '../components/Social'


class CaseStudies extends React.Component {
	render() {
		const siteTitle = "get(this, 'props.data.site.siteMetadata.title')"
		const posts = get(this, 'props.data.allMarkdownRemark.edges')
		console.log('posts', posts)
		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<h1>Up at five</h1>
				<h2>case studies</h2>
				{posts.map(post => {
					let hero = post.node.frontmatter.hero
					if (post.node.path !== '/404/') {
						const title = get(post, 'node.frontmatter.title') || post.node.path
						return (
							<div key={post.node.frontmatter.path}>
								<Link to={post.node.frontmatter.path} >
									<img src={post.node.frontmatter.hero.childImageSharp.responsiveSizes.src} alt=""/>
									<h3>
											{post.node.frontmatter.title}
									</h3>
									<p>{post.node.frontmatter.client}</p>
								</Link>
								{/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
							</div>
						)
					}
				})}
				<Social/>
			</div>
		)
	}
}

CaseStudies.propTypes = {
	route: React.PropTypes.object,
}


export default CaseStudies

export const pageQuery = graphql`
  query StudyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
						title
						client
						hero {
							childImageSharp {
								responsiveSizes(maxWidth: 400) {
									src
									srcSet
									sizes
								}
							}
						}
          }
        }
      }
    }
  }
`

