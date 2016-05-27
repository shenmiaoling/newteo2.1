import React from 'react'
import {Link} from 'react-router'
require('./styles')
module.exports = React.createClass({
  render(){
    return <div className='container evaluation'>
      <div className='row steps'>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='./images/first-step.png' className='block-img first-step '/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='./images/second-step.png' className='block-img second-step'/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='./images/third-step.png' className='block-img third-step'/>
        </div>
      </div>
      <div className='text-center'>
        <p className='evaluation-txt'>自助评估您的项目价格和周期</p>
        <h4 className='down-text'>轻松完成您的项目评估，获得newTeo承诺报价</h4>
      </div>
      <div className='row steps'>
        <div className='col-lg-3 col-xl-3 col-xs-6 col-sm-6 col-md-6'>
          <img src='./images/web 2 .png' className='block-img'/>
          <Link to='/web'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn">网站</button>
          </Link>
        </div>
        <div className='col-lg-3 col-xl-3 col-xs-6 col-sm-6 col-md-6'>
          <img src='./images/ios.png' className='block-img'/>
          <Link to='/ios'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn">iOS应用</button>
          </Link>
        </div>
        <div className='col-lg-3 col-xl-3 col-xs-6 col-sm-6 col-md-6'>
          <img src='./images/android.png' className='block-img'/>
          <Link to='/android'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn">安卓应用</button>
          </Link>
        </div>
        <div className='col-lg-3 col-xl-3 col-xs-6 col-sm-6 col-md-6'>
          <img src='./images/wechat 2.png' className='block-img'/>
          <Link to='/wechat'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn">微信</button>
          </Link>
        </div>
      </div>
    </div>
  }
})
