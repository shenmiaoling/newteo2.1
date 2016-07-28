import React from 'react'
import {
  Link,
  IndexLink,
} from 'react-router'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      navIsOpen:false,
      transparent: false
    }
  },
  handleClick(event){
    this.setState({
        navIsOpen:!this.state.navIsOpen,
        transparent:!this.state.transparent
    })
  },
  handleNavup(){
    this.setState({
      navIsOpen:false,
      transparent: false
    })
  },
  render() {
    return <div>
      <div className={this.state.transparent?'transparent hidden-md-up':''} onClick={this.handleNavup}></div>
      <div className=" navbar-light bg-faded hidden-md-up nav-mobile">
      <div className='container'>
        <IndexLink to="/" className="col-img"><img src='../../images/mobilelogo.png' className='img-nav' onClick={this.handleNavup}></img></IndexLink>
          <div className='nav-list' >
          <span className="iconfont icon-drag mobile-icon" onClick={this.handleClick}></span>
          <ul className={this.state.navIsOpen?'nav nav-is-open':'nav'}>
            <li className="nav-item moblile-link">
              <Link to="/evaluation" className="nav-link nav-text" onClick={this.handleClick}>{locales.zh_CN.evaluation}</Link>
            </li>
            <li className="nav-item moblile-link">
                <Link to="/requirement" className="nav-link nav-text" onClick={this.handleClick}>{locales.zh_CN.requirement}</Link>
            </li>
            <li className="nav-item moblile-link">
              <Link to="/cases?all" className="nav-link nav-text" onClick={this.handleClick}>{locales.zh_CN.cases}</Link>
            </li>
            <li className="nav-item moblile-link">
              <Link to="/product" className="nav-link nav-text" onClick={this.handleClick}>{locales.zh_CN.product}</Link>
            </li>
            <li className="nav-item moblile-link">
              <Link to="/contact" className="nav-link nav-text" onClick={this.handleClick}>{locales.zh_CN.contact}</Link>
            </li>
          </ul>
        </div>
          </div>
      </div>
    </div>
  }
})
