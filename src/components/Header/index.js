import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<Link to="/">
					<h2>Header</h2>
				</Link>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/case-studies">Case Studies</Link></li>
					<li><Link to="/educational-resources">Educational Resources</Link></li>
				</ul>
			</div>
		)
	}
}

export default Header
