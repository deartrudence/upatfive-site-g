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
import pineapple1 from '../assets/pineapple-1.jpg'
import pineapple2 from '../assets/pineapple-4.jpg'
import pineapple3 from '../assets/pineapple-5-bw.jpg'
import pineapple4 from '../assets/pineapple-7.jpg'


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
                className="image1-outer"
                offsetYMax={90}
                offsetYMin={-90}
                slowerScrollRate
                tag="figure"
              >
                <img className="image1" src={pineapple1} alt=""/>
              </Parallax>
              <Parallax
                className="box1-outer"
                offsetYMax={"0px"}
                offsetYMin={"500px"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box1"></div>
              </Parallax>
            </div>
            <div className="right-side">
              <Parallax
                className="image2-outer"
                offsetYMax={90}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image2" src={pineapple2} alt=""/>
              </Parallax>
              <Parallax
                className="box2-outer"
                offsetYMax={"300"}
                offsetYMin={"-300"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box2"></div>
              </Parallax>
              <Parallax
                className="image3-outer"
                offsetYMax={90}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image3" src={pineapple4} alt="" />
              </Parallax>
            </div>
          </div>
          <div className="wrapper-grey">
            <h1 className="up-five-title">Up At Five</h1>
            <p className="up-five-subtitle">A digital studio focused on data-driven web applications</p>
            <h3 className="secondary-title">selected clients</h3>

            <div className="client-grid">
              {clients.map(client =>{
                return (
                  <ClientLogo key={client.name} name={client.name} logo={client.logo} link={client.link} />
                )
                })
              }
            </div>
            <Link to="/about#all-clients">View All Clients</Link>
            <h3 className="secondary-title">methodology</h3>
            <h4>Lorem Ipsum Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem. </p>
            <h4>Lorem Ipsum Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem. </p>
            <h4>Lorem Ipsum Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sapien sed risus lacinia, ut volutpat nisi accumsan. In lacus mi, dignissim quis nulla a, tincidunt interdum lorem. </p>
            <Parallax
              className="custom-class"
              offsetYMax={"50px"}
              offsetYMin={"-50px"}
              slowerScrollRate
              tag="figure"
            >
              <Social />
            </Parallax>
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

