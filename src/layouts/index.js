import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
      
    // if (location.pathname === '/') 
      
    return (
      <div>
        <Header/>
        {children()}
        <Footer/>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
