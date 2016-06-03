import React from 'react'
import {Link,IndexLink} from 'react-router'
require ('./styles')
module.exports = React.createClass({
  render(){
    return <div>
      <div className='cases-navbar'>
        <div className='case-txt'>
          <ul className="nav nav-inline">
            <li className="nav-item case-nav">
              <Link to="/cases" className="nav-link nav-icon-all"><span className="iconfont all icon-all"></span></Link>
            </li>
            <li className="nav-item nav-li case-nav">
              <Link to='/cases/web'className="nav-link nav-txt">网页</Link>
            </li>
            <li className="nav-item nav-li case-nav">
              <Link to='/cases/app'className="nav-link nav-txt">软件</Link>
            </li>
            <li className="nav-item case-nav">
              <Link to='/cases/wechat' className="nav-link nav-txt">微信</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container case-container'>
        <div className='caselist'>
          <div className='row'>
            <div className='col-lg-5 col-xl-5 col-xs-5 col-sm-5 col-md-5'>
                <img src='/images/pencil.jpg' className='case-image'/>
                <div className='img-bottom'>
                  项目名称
                </div>
            </div>
            <img src='images/accomplish.png' className='case-staus'/>
            <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <h2 className='case-label'>金额</h2>
                <h2 className='case-count'>￥1,0000</h2>
            </div>
            <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
              <h2 className='case-label'>周期</h2>
              <h2 className='case-count'>￥1,0000</h2>
            </div>
            <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
              <h3 className='case-label'>类型</h3>
              <h3 className='case-count'>￥1,0000</h3>
            </div>
          </div>
        </div>
      </div>
      {this.props.children}
    </div>
  }
})
