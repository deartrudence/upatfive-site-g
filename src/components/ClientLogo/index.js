import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class ClientLogo extends React.Component {
	render() {
		return (
			<Link className="client"to={this.props.link}>
				<img src={this.props.logo} alt={this.props.name} />
			</Link>
		)
	}
}

export default ClientLogo