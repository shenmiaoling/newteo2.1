import React from 'react'
import superagent from 'superagent'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='Cases'>
      <div className='text-center'>
        <h1>这些项目被newTeo实现</h1>
      </div>
      <div className='container cases-container'>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className='img-container'>
              <div className='cover'>
                <p>项目名称：xxx</p>
                <p>价格：10000</p>
              </div>
              <img src='./images/pencil.jpg' className="cases-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
