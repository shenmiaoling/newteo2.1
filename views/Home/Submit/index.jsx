import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='Submit'>
      <div className='container'>
        <h1 className='submit-text'>提交需求</h1>
        <div className='row'>
          <div className='col-md-4 col-lg-4 col-xl-4'>
            <img src='../images/web.png' className='img-rounded submit-img'></img>
            <button type="button" className="btn btn-primary submit-btn">网页</button>
          </div>
          <div className='col-md-4 col-lg-4 col-xl-4'>
            <img src='../images/APP.png' className='img-rounded submit-img'></img>
            <button type="button" className="btn btn-primary submit-btn">软件</button>
          </div>
          <div className='col-md-4 col-lg-4 col-xl-4'>
            <img src='../images/wechat.png' className='img-rounded submit-img'></img>
            <button type="button" className="btn btn-primary submit-btn">微信</button>
          </div>
        </div>
      </div>
    </div>
  }
})
