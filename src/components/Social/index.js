import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome';
// import './css/font-awesome.css'
import './index.css'

class Header extends React.Component {
	render() {
		return (
			<div className="social-bar">
					<h4>Social</h4>
				<Link to="/https://github.com/upatfive">
					<FontAwesome
						name='github'
						size='lg'
						/>
				</Link>
				<Link to="https://twitter.com/up_at_five">
					<FontAwesome
						name='twitter'
						size='lg'
					/>
				</Link>
				<Link to="https://www.linkedin.com/company/up-at-five/">
					<FontAwesome
						name='linkedin'
						size='lg'
					/>
				</Link>
			</div>
		)
	}
}

export default Header