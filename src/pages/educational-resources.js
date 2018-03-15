import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'


class EducationalResources extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')

		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="wrapper-grey">
					<h1 className="up-five-title">Up At Five</h1>
					<h2 className="primary-title">educational resources</h2>

					<h4><a href="http://www.codeshopify.com/" target="_blank">Code Shopify</a></h4>
					<h4><a href="#" target="_blank">Videos</a></h4>
					<h3 className="secondary-title">be the first to know about new tutorials</h3>
				</div>
			</div>
		)
	}
}



export default EducationalResources

