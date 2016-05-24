import React from 'react'
import {Link,IndexLink} from 'react-router'
require ('./styles')
module.exports = React.createClass({
  render(){
    return <div className='cases'>
      <div className='cases-navbar'>
        <ul className="nav nav-inline container">
          <li className="nav-item">
            <Link to="/cases" className="nav-link nav-icon-all"><span className="iconfont all icon-all"></span></Link>
          </li>
          <li className="nav-item nav-li">
            <Link to='/cases/web'className="nav-link nav-txt">网页</Link>
          </li>
          <li className="nav-item nav-li">
            <Link to='/cases/app'className="nav-link nav-txt">软件</Link>
          </li>
          <li className="nav-item">
            <Link to='/cases/wechat' className="nav-link nav-txt">微信</Link>
          </li>
        </ul>
      </div>
      <div className='container'>
        <div className='caselist'>
          <div className='row'>
            <div className='col-lg-5 col-xl-5 col-xs-5 col-sm-5 col-md-5'>
                <img src='/images/pencil.jpg' className='case-image'/>
                <div className='image-container'>
                  <div className='img-bottom'>项目名称</div>
                </div>
            </div>
            <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <h3 className='case-label'>金额</h3>
                <h3 className='case-count'>￥1,0000</h3>
            </div>
            <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
              <h3 className='case-label'>周期</h3>
              <h3 className='case-count'>￥1,0000</h3>
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
