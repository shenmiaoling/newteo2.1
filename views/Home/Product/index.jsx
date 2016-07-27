import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='Product'>
      <div>
        <h1 className='text-center'>我们的产品</h1>
      </div>
      <div className='container product-container'>
        <div className="row product-row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 product-col-img">
            <img src='/images/product_1.jpg' className="product-img"/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 product-col-img">
            <img src='./images/product_1.jpg' className="product-img"/>
          </div>
        </div>
      </div>
    </div>
  }
})
