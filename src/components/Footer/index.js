import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Logo from './up-at-five-logo.png'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<h2>Footer</h2>
				<img src={Logo} alt=""/>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/case-studies">Case Studies</Link></li>
					<li><Link to="/educational-resources">Educational Resources</Link></li>
				</ul>
			</footer>
		)
	}
}

export default Footer