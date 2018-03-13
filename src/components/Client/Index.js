import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class Client extends React.Component {
	render() {
		return (
			<li className="client-list-item">
				<Link to={this.props.link}>
					<p><span>{this.props.name}</span> |  {this.props.type}</p>
				</Link>
			</li>
		)
	}
}

export default Client