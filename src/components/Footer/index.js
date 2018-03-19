import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Logo from './up-at-five-logo.png'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="image">
					<img src={Logo} alt=""/>
				</div>
				<div className="info">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/case-studies">Case Studies</Link></li>
						<li><Link to="/educational-resources">Educational Resources</Link></li>
					</ul>
				</div>
				<div className="info">
					<ul>
						<li><a href="">Hello@upatfive.ca</a></li>
						<li><a href="">+1 416-555-5555</a></li>
					</ul>
				</div>
				<div className="info">
					<ul>
						<li>@ upatfive, 2018</li>
					</ul>
				</div>
			</footer>
		)
	}
}

export default Footer