import React from 'react'
require('./styles')
module.exports = React.createClass({
  render(){
    return <div className='container'>
      <div className='product'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='product-container'>
              <img src='/images/pencil.jpg' className='product-image'/>
              <div className='product-content'>
                <p className='product-text'>主体内容包含但不限：</p>
                <p>React,ReactNative,ReactRouter,Redux,Relay...等React周边ecosytem的泛社区</p>
                <p>主体内容包含但不限：</p>
                <p style={{display:'block'}}>React,ReactNative,ReactRouter,Redux,Relay...等React周边ecosytem的泛社区</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='product-container'>
              <img src='/images/pencil.jpg' className='product-image'/>
              <div className='product-content'>
                <p>主体内容包含但不限：</p>
                <p>React,ReactNative,ReactRouter,Redux,Relay...等React周边ecosytem的泛社区</p>
                <p>主体内容包含但不限：</p>
                <p>React,ReactNative,ReactRouter,Redux,Relay...等React周边ecosytem的泛社区</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
