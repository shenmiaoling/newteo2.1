import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='footer'>
      <div className='contact-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont address icon-address'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <h1 className='info-text'>潮州市庵埠镇竹围工业区100号</h1>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont email icon-email'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <p className='info-text'>info@newteo.com</p>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont contact icon-contact'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <p className='info-text'>0768-2637496</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='info-wechat'>
              <img src='./images/wechat-code.jpg' className='wechat-code img-thumbnail'/>
              <p className='code-text'>公众号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  }
})
