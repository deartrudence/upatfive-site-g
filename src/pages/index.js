import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Parallax } from 'react-scroll-parallax'
import Social from '../components/Social'
import ClientLogo from '../components/ClientLogo'
import Helmet from 'react-helmet'
import './index.css'
import borrowell from '../assets/logos/Borrowell-Logo.png'
import wwf from '../assets/logos/wwf_logo.svg'
import msf from '../assets/logos/msf_logo.png'
import diageo from '../assets/logos/diageo_logo.svg'
import northstar from '../assets/logos/northstar_logo.svg'
import td from '../assets/logos/td_bank_logo.svg'
import clc from '../assets/logos/CLC-Logo.svg'
import shopify from '../assets/logos/shopify.svg'
import hackeryou from '../assets/logos/Stacked-HYCollege.png'
import ua5_home_1 from '../assets/ua5_home_1.png'
import ua5_home_2 from '../assets/ua5_home_2.png'
import ua5_home_3 from '../assets/ua5_home_3.png'
import ua5_home_4 from '../assets/ua5_home_4.png'


class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const clients = [
      { name: "borrowell", logo: borrowell, link:"https://www.borrowell.com"}, 
      { name: "wwf", logo: wwf, link:"http://www.wwf.ca/"},
      { name: "msf", logo: msf, link:"http://www.msf.ca/" },
      { name: "diageo", logo: diageo, link:"https://www.diageo.com/" },
      { name: "northstar", logo: northstar, link:"http://www.northstarhub.com/"},
      { name: "td bank", logo: td, link:"https://www.td.com/" },
      { name: "Canada Learning Code", logo: clc, link:"https://www.canadalearningcode.ca/" },
      { name: "Shopify", logo: shopify, link:"https://www.shopify.com" },
      { name: "Hackeryou", logo: hackeryou, link:"http://hackeryou.com/" },

    ]
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <div className="wrapper-outer">
          <div className="flex-wrapper">
            <div className="left-side">
              <Parallax
                className="image-outer_home_1"
                offsetYMax={25}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_1" src={ua5_home_1} alt=""/>
              </Parallax>
              <Parallax
                className="box1-outer"
                offsetYMax={"300px"}
                offsetYMin={"490px"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box1"></div>
              </Parallax>
              <Parallax
                className="image-outer_home_3"
                offsetYMax={90}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_3" src={ua5_home_3} alt="" />
              </Parallax>
            </div>
            <div className="right-side">
              <Parallax
                className="image-outer_home_2"
                offsetYMax={0}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_2" src={ua5_home_2} alt=""/>

              </Parallax>
              <Parallax
                className="image-outer_home_4"
                offsetYMax={"-100px"}
                offsetYMin={"0px"}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_4" src={ua5_home_4} alt=""/>

              </Parallax>
              <Parallax
                className="box2-outer"
                offsetYMax={"300"}
                offsetYMin={"0"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box2"></div>
              </Parallax>
              
            </div>
          </div>
          <div className="wrapper-grey">
            <h1 className="up-five-title">Up At Five</h1>
            <p className="up-five-subtitle main-page">A digital studio focused on data-driven web applications</p>
            <div className="methodology">
              <h3 className="secondary-title">methodology</h3>
              <h4>Discover</h4>
              <p>Building out your site or application starts with a conversation. We work with you to help distill your ideas and create a clear project vision. We talk about how you want to enter the market and potential directions for growth. We evaluate the continued engagement with and management of your platform and determine the best approach and technologies.</p>
              <h4>Design</h4>
              <p>We focus heavily on interaction design and usability. This is paired with visual aesthetic to create a responsive and intuitive experience.</p>
              <h4>Develop</h4>
              <p>We believe strongly in choosing the right tool for the job. Integrating our research and knowledge of your application we select a technical stack that prioritizes functionality and ease of maintenance.</p>
            </div>
            <h3 className="secondary-title">selected clients</h3>

            <div className="client-grid">
              {clients.map(client =>{
                return (
                  <ClientLogo key={client.name} name={client.name} logo={client.logo} link={client.link} />
                )
                })
              }
            </div>
            <Link className="view-clients" to="/about#all-clients">View All Clients</Link>
            
              <Social />
          </div>
        </div>
      </div>
    )
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
}

export default SiteIndex

