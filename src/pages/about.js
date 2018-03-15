import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Client from '../components/Client'
import Social from '../components/Social'


class About extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const clients = [
			{ name: "borrowell", type: "Finance", link: "https://www.borrowell.com" },
			{ name: "wwf", type: "Charity, Animals", link: "http://www.wwf.ca/" },
			{ name: "msf", type: "Charity", link: "http://www.msf.ca/" },
			{ name: "diageo", type: "Alcohol", link: "https://www.diageo.com/" },
			{ name: "northstar", type: "Market Research", link: "http://www.northstarhub.com/" },
			{ name: "td bank", type: "Finance", link: "https://www.td.com/" },
			{ name: "Canada Learning Code", type: "Charity, Tech, Education", link: "https://www.canadalearningcode.ca/" },
			{ name: "Shopify", type: "e-commerce", link: "https://www.shopify.com" },
			{ name: "Hackeryou", type: "tech, education", link: "http://hackeryou.com/" },
			{ name: "Triumph Capital Limited", type: "Finacne", link: "http://hackeryou.com/" },
			{ name: "Synqrinus", type: "Market Research", link: "http://hackeryou.com/" },
			{ name: "DT Print Solutions", type: "printing", link: "http://hackeryou.com/" },
			{ name: "James Signs", type: "Printing", link: "http://hackeryou.com/" },
			{ name: "CAIS Schools", type: "education", link: "http://hackeryou.com/" },
			{ name: "Carolinean Canada", type: "Charity, Environment", link: "http://hackeryou.com/" },
			{ name: "Crossey Engineering", type: "Engineering", link: "http://hackeryou.com/" },
			{ name: "Frankfurt Book Market", type: "publishing", link: "http://hackeryou.com/" },
			{ name: "Grayes", type: "Clothing Retail", link: "http://hackeryou.com/" },
			{ name: "Linkitz", type: "Tech, education", link: "http://hackeryou.com/" },
			{ name: "Dr Roebuck's", type: "Beauty, Retail", link: "http://hackeryou.com/" },
			{ name: "Village Mommy", type: "Social", link: "http://hackeryou.com/" },
			{ name: "Learnography", type: "Education", link: "http://hackeryou.com/" },
			{ name: "I Love Yoga", type: "Health & Wellness", link: "http://hackeryou.com/" },
			{ name: "Supermilk", type: "Research, Environment", link: "http://hackeryou.com/" },
			{ name: "Runningdive", type: "Retail", link: "http://hackeryou.com/" }

		]
		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="wrapper-grey">
					<h1 className="up-five-title">Up At Five</h1>
					<p>Crafting the web before 10am</p>
					<h2 className="primary-title">about us</h2>
					<h3 className="secondary-title">services</h3>
					<ul>
						<li>Shopify</li>
						<li>Ecommerce</li>
						<li>Ruby on Rails</li>
						<li>Back-End</li>
						<li>Front-End</li>
						<li>UX</li>
						<li>Art Direction</li>
						<li>Visual Design</li>
					</ul>
					<h3 id="all-clients" className="secondary-title">clients we've worked with</h3>
					<ul className="client-list">
						{clients.map(client => {
							return (
								<Client key={client.name} name={client.name} type={client.type} link={client.link} />
							)
						})
						}
					</ul>
					<h3 className="secondary-title">our team</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem.</p>
					<h2 className="primary-title">contact</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem.</p>
					<a className="button" href="mailto:hello@upatfive.ca">hello@upatfive.ca</a>
					<Social/>
				</div>
			</div>
		)
	}
}



export default About

