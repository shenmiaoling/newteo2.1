import React from 'react'
import {
  Link,
  IndexLink,
} from 'react-router'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  render() {
    const activeStyle = {borderBottom: '3px solid white',transition: 'all 0.2s ease-in'}
    return <div className={this.props.hasShadow ? 'navbar navbar-light bg-faded hidden-sm-down topbar navbar-fixed-top row' : 'navbar navbar-light bg-faded hidden-sm-down topbar-shadow navbar-fixed-top row'}>
      <div className='container'>
        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 nav-logo'>
          <div className='logo-img'>
            <IndexLink to="/"><img src='../../images/logo.png' className="navbar-img"></img></IndexLink>
          </div>
        </div>
        <div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11'>
          <ul className="nav nav-inline">
            <li className="nav-item">
              <Link to="/evaluation" className="nav-link navbar-text" activeStyle={activeStyle}>{locales.zh_CN.evaluation}</Link>
            </li>
            <li className="nav-item">
              <Link to="/requirement" className="nav-link navbar-text" activeStyle={activeStyle}>{locales.zh_CN.requirement}</Link>
            </li>
            <li className="nav-item">
              <Link to="/cases" className="nav-link navbar-text" activeStyle={activeStyle}>{locales.zh_CN.cases}</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link navbar-text" activeStyle={activeStyle}>{locales.zh_CN.product}</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link navbar-text" activeStyle={activeStyle}>{locales.zh_CN.contact}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
})
