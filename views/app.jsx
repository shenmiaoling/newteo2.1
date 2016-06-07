import React from 'react'
import { withRouter } from 'react-router'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'
require('./styles')
module.exports = withRouter(React.createClass({
  render(){
    const hasShadow = this.props.location.pathname == '/'
    return <div className='app'>
      <Navbar hasShadow={hasShadow} />
      <MobileNavbar/>
      {this.props.children && React.cloneElement(this.props.children, {router: this.props.router})}
      <Footer/>
    </div>
  }
}))
