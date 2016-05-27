import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'
require('./styles')
module.exports = React.createClass({
  render(){
    const hasShadow = this.props.location.pathname == '/'
    return <div className='app'>
      <Navbar hasShadow={hasShadow} />
      <MobileNavbar/>
      {this.props.children}
      <Footer/>
    </div>
  }
})
