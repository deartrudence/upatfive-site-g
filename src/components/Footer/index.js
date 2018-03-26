import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Logo from '../../assets/up-at-five-logo.png'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<img src={Logo} alt=""/>
				<div className="info-wrapper">
					<div className="info">
						<ul>
							<li><Link to="/">home</Link></li>
							<li><Link to="/about">about</Link></li>
							<li><Link to="/case-studies">case studies</Link></li>
							<li><Link to="/educational-resources">educational resources</Link></li>
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
				</div>
			</footer>
		)
	}
}

export default Footer