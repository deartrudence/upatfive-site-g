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
				<h3>EDUCATIONAL RESOURCES</h3>

				<h4><a href="http://www.codeshopify.com/" target="_blank">Code Shopify</a></h4>
				<h4><a href="#" target="_blank">Videos</a></h4>
			</div>
		)
	}
}



export default EducationalResources

