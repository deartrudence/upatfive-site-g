import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Client from '../components/Client'
import Social from '../components/Social'
import about_image from '../assets/about.png'
import jordan from '../assets/Jordan.png'
import trudy from '../assets/Trudy.png'
import welike from '../assets/welikeinternet.png'
import hydesk from '../assets/hy-desk.png'
import { Parallax } from 'react-scroll-parallax' 


class About extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const clients = [
			{ name: "WWF", type: "Charity, Animals", link: "http://www.wwf.ca/" },
			{ name: "Shopify", type: "e-commerce", link: "https://www.shopify.com" },
			{ name: "Grayes", type: "Fashion, Retail", link: "https://grayes.com/" },
			{ name: "Dr Roebuck's", type: "Beauty, Retail", link: "https://drroebucks.com/" },
			{ name: "Frankfurt Book Market", type: "publishing", link: "https://canadafbm2020.com/" },
			{ name: "Diageo", type: "Alcohol", link: "https://www.diageo.com/" },
			{ name: "Synqrinus", type: "Market Research", link: "http://synqrinus.com/" },
			{ name: "Supermilk", type: "Research, Environment", link: "http://supermilk.studio/" },
			{ name: "TD bank", type: "Finance", link: "https://www.td.com/" },
			{ name: "Canada Learning Code", type: "Charity, Tech", link: "https://www.canadalearningcode.ca/" },
			{ name: "Doctors without boarders", type: "Charity", link: "http://www.msf.ca/" },
			{ name: "Northstar", type: "Market Research", link: "http://www.northstarhub.com/" },
			{ name: "Borrowell", type: "Finance", link: "https://www.borrowell.com" },
			{ name: "Hackeryou", type: "tech, education", link: "http://hackeryou.com/" },
			{ name: "Runningdive", type: "Retail", link: "https://runningdive.myshopify.com/" },
			{ name: "Triumph Capital Limited", type: "Finance", link: "http://www.triumphant.ca/" },
			{ name: "DT Print Solutions", type: "printing, retail", link: "https://www.dtprintsolutions.com/" },
			{ name: "Admiral Road", type: "retail", link: "https://admiralroad.com/" },
			{ name: "CAIS Schools", type: "education", link: "https://www.cais.ca/" },
			{ name: "Carolinean Canada", type: "Charity, Environment", link: "https://caroliniancanada.ca/" },
			{ name: "James Signs", type: "Printing", link: "http://jamessigns.com/" },
			{ name: "Crossey Engineering", type: "Engineering", link: "http://www.cel.ca/" },
			{ name: "Linkitz", type: "Tech, education", link: "http://www.linkitz.com/" },
			{ name: "Village Mommy", type: "Social", link: "http://www.villagemommy.com/" },
			{ name: "Learnography", type: "Education", link: "https://learnography.ca/" },
			{ name: "I Live Yoga", type: "Health & Wellness", link: "https://iliveyoga.com/" }

		]
		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="wrapper-outer">
					{/* <div className="blue-bar-1"></div> */}
					<div className="flex-wrapper">
						<Parallax
							className="box1-outer"
							offsetYMax={"0px"}
							offsetYMin={"490px"}
							slowerScrollRate
							tag="figure"
						>
							<div className="blue-box_about_horizontal_1"></div>
						</Parallax>
						<Parallax
							className="box3-outer"
							offsetYMax={"400px"}
							offsetYMin={"0px"}
							slowerScrollRate
							tag="figure"
						>
							<div className="blue-box_about_vertical_1"></div>
						</Parallax>
						<Parallax
							className="box-outer_about_horizontal_2"
							offsetYMax={"0px"}
							offsetYMin={"200px"}
							slowerScrollRate
							tag="figure"
						>
							<div className="blue-box_about_horizontal_2"></div>
						</Parallax>
						<Parallax
							className="box-outer_about_vertical_2"
							offsetYMax={"400px"}
							offsetYMin={"0px"}
							slowerScrollRate
							tag="figure"
						>
							<div className="blue-box_about_vertical_2"></div>
						</Parallax>
					</div>
					<div className="wrapper-grey">
						<h1 className="up-five-title">Up At Five</h1>
						<p className="up-five-subtitle">Crafting the web before 10am</p>
						{/* <Parallax
							className="about-image-parallax"
							offsetYMax={0}
							offsetYMin={0}
							slowerScrollRate
							tag="figure"
						> */}
							<img className="about-image" src={about_image} alt=""/>
						{/* </Parallax> */}
						<h2 className="primary-title about">about us</h2>
						<div className="services">
							<h3 className="secondary-title">services</h3>
							<ul className="service-list">
								<li>Application Development</li>
								<li>Ecommerce</li>
								<li>Shopify</li>
								<li>UX / UI</li>
								<li>Art Direction</li>
								<li>Visual Design</li>
							</ul>
						</div>

						<div className="welike">
							<Parallax
								className="about-image-parallax"
								offsetYMax={"50px"}
								offsetYMin={"-20px"}
								slowerScrollRate
								tag="figure"
							>
								<img src={welike} alt=""/>
							</Parallax>
							<Parallax
								className="about-image-parallax"
								offsetYMax={"0px"}
								offsetYMin={"20px"}
								slowerScrollRate
								tag="figure"
							>
								<p>We like</p>
								<p>the internet</p>
							</Parallax>
				
						</div>

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
						<div className="our-team">
							<p> Our team is comprised of developers and designers working to build the web.</p>
							<p>We build accessible web applications that provide solutions to real problems. Our projects are data driven, emphasizing the content, with a focus on user experience.</p>
							<div className="profile-photos">
								<div>
									<img src={jordan} alt=""/>
									<p>Jordan</p>
								</div>
								<div>
									<img src={trudy} alt=""/>
									<p>Trudy</p>
								</div>
							</div>
						</div>
						<div className="methodology">
							<h3 className="secondary-title">methodology</h3>
							<h4>Discover</h4>
							<p>Building out your site or application starts with a conversation. We work with you to help distill your ideas and create a clear project vision. We talk about how you want to enter the market and potential directions for growth. We evaluate the continued engagement with and management of your platform and determine the best approach and technologies.</p>
							<h4>Design</h4>
							<p>We focus heavily on interaction design and usability. This is paired with visual aesthetic to create a responsive and intuitive experience.</p>
							<h4>Develop</h4>
							<p>We believe strongly in choosing the right tool for the job. Integrating our research and knowledge of your application we select a technical stack that prioritizes functionality and ease of maintenance.</p>
						</div>
						<h2 id="contact-area" className="primary-title contact">contact</h2>
						<div className="contact-area">
							<p>We love to meet new people, hear novel ideas, and learn about different projects. If you have a project you'd like to discuss or want to grab a coffee we would love to hear from you.</p>
							<a className="button" href="mailto:hello@upatfive.ca" target="_blank">hello@upatfive.ca</a>
						</div>
						<img className="hydesk" src={hydesk} alt=""/>
						<Social/>
					</div>
				</div>
			</div>
		)
	}
}



export default About

