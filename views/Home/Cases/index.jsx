import React from 'react'
import superagent from 'superagent'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='Cases'>
      <div className='case-text-center'>
        <p>这些项目被newTeo实现</p>
      </div>
      <div className='container cases-container'>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container '>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
            <div className='img-container'>
              <div className='cover hidden-md-down'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='mobile-cover hidden-md-up'>
                  <p>项目名称：xxx</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
