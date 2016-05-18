import React from 'react'
import {
  Link,
  IndexLink,
} from 'react-router'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  render() {
    return <nav className="navbar navbar-light bg-faded">
        <IndexLink to="/" className="navbar-brand"><img src='../../images/logo.png' className="navbar-img"></img></IndexLink>
        <ul className="nav navbar-nav">
          <div className='row-fluid'>
            <div className='span2'>
              <li className="nav-item">
                <Link to="/balance" className="nav-link">{locales.zh_CN.balance}</Link>
              </li>
            </div>
            <div className='span2'>
              <li className="nav-item">
                <Link to="/require" className="nav-link">{locales.zh_CN.require}</Link>
              </li>
            </div>
            <div className='span2'>
            <li className="nav-item">
              <Link to="/cases" className="nav-link">{locales.zh_CN.cases}</Link>
            </li>
          </div>
          <div className='span2'>
          <li className="nav-item">
            <Link to="/product" className="nav-link">{locales.zh_CN.product}</Link>
          </li>
          </div>
          <div className='span2'>
          <li className="nav-item">
            <Link to="/team" className="nav-link">{locales.zh_CN.team}</Link>
          </li>
          </div>
          <div className='span2'>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">{locales.zh_CN.contact}</Link>
          </li>
          </div>
          </div>
        </ul>
      </nav>
  }
})
