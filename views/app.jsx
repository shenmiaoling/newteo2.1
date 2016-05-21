import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'
module.exports = React.createClass({
  render(){
    return <div className='app'>
      <Navbar />
      <MobileNavbar/>
      {this.props.children}
      <Footer/>
    </div>
  }
})
