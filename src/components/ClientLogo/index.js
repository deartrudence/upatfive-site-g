import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class ClientLogo extends React.Component {
	render() {
		return (
			<a className="client" href={this.props.link} target="_blank">
				<img src={this.props.logo} alt={this.props.name} />
			</a>
		)
	}
}

export default ClientLogo