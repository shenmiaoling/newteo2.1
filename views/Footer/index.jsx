import React from 'react'
import {locales} from '../../settings'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='footer'>
      <div className='contact-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='row info-address'>
              <div className='col-lg-3 col-xl-3 col-xs-3 col-sm-3 col-md-3'>
                <div className='info-icon iconfont address icon-address address-icon'></div>
              </div>
              <div className='col-lg-9 col-xl-9 col-xs-9 col-sm-9 col-md-9'>
                <p className='info-text'>{locales.zh_CN.address}</p>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-3 col-xl-3 col-xs-3 col-sm-3 col-md-3'>
                <div className='info-icon iconfont email icon-email'></div>
              </div>
              <div className='col-lg-9 col-xl-9 col-xs-9 col-sm-9 col-md-9'>
                <p className='info-text'>{locales.zh_CN.email}</p>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-3 col-xl-3 col-xs-3 col-sm-3 col-md-3'>
                <div className='info-icon iconfont contact icon-contact phone-icon'></div>
              </div>
              <div className='col-lg-9 col-xl-9 col-xs-9 col-sm-9 col-md-9'>
                <p className='info-text'>{locales.zh_CN.phone_number}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='info-wechat'>
              <img src='/images/wechat-code.jpg' className='wechat-code img-thumbnail'/>
              <p className='code-text'>公众号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  }
})
