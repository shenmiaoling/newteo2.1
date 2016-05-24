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
    }
  },
  handleClick(event){
    this.setState({
        navIsOpen:!this.state.navIsOpen
    })
  },
  render() {
    return <nav className="navbar navbar-light bg-faded hidden-md-up">
      <div className='row'>
        <IndexLink to="/" className="col-sm-3 col-xs-3 col-img"><img src='../../images/logo.png' className='img-nav'></img></IndexLink>
          <div className='col-sm-9 col-xs-9 nav-list' >
          <span className="iconfont icon-drag nav-icon" onClick={this.handleClick}></span>
            <ul className={this.state.navIsOpen?'nav nav-is-open':'nav'}>
              <li className="nav-item">
                <Link to="/balance" className="nav-link nav-text">{locales.zh_CN.balance}</Link>
              </li>
              <li className="nav-item">
                  <Link to="/requirement" className="nav-link nav-text">{locales.zh_CN.requirement}</Link>
              </li>
              <li className="nav-item">
                <Link to="/cases" className="nav-link nav-text">{locales.zh_CN.cases}</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link nav-text">{locales.zh_CN.product}</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link nav-text">{locales.zh_CN.team}</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-text">{locales.zh_CN.contact}</Link>
              </li>
            </ul>
          </div>
          </div>
      </nav>
  }
})
