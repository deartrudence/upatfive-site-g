import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class Client extends React.Component {
	render() {
		return (
			<li className="client-list-item">
				<a href={this.props.link} target="_blank">
					<p><span>{this.props.name}</span> |  {this.props.type}</p>
				</a>
			</li>
		)
	}
}

export default Client