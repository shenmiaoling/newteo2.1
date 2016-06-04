import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div>
      <div className='Submit'>
        <div className='container hidden-md-down'>
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
      <h1 className='mobile-submit-text hidden-md-up'>提交需求</h1>
      <div className='container hidden-md-up'>
        <div className='row'>
          <div className='col-md-4 col-xs-4 col-sm-4'>
            <img src='../images/web2.png' className='mobile-submit-img'></img>
            <p className='submit-intro'>网页</p>
          </div>
          <div className='col-md-4 col-xs-4 col-sm-4'>
            <img src='../images/app2.png' className='mobile-submit-img'></img>
            <p className='submit-intro'>软件</p>
          </div>
          <div className='col-md-4 col-xs-4 col-sm-4'>
            <img src='../images/wechat2.png' className='mobile-submit-img'></img>
            <p className='submit-intro'>微信</p>
          </div>
        </div>
      </div>
    </div>
  }
})
