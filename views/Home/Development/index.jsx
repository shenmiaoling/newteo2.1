import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='development'>
      <div>
        <h1 className='text-center'>实现一套完整的开发流程</h1>
      </div>
      <div className='container container-block'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 .col-lg-3 .col-xl-3">
            <div className='column row'>
              <div className='col-xs-5 col-sm-5 col-md-12 col-lg-12 col-xl-12'>
                <img src='./images/pm.png' className="img-range"/>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 development-itro'>
                <h4 className='itro-title'>需求整理 & 原型</h4>
                <p className='main-intro'>newTeo 整理项目需求，编写需求文档并制作原型。</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className='column row'>
              <div className='col-xs-5 col-sm-5 col-md-12 col-lg-12 col-xl-12'>
                <img src='./images/UI.png' className="img-range"/>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 development-itro'>
                <h4 className='itro-title'>UI 设计</h4>
                <p className='main-intro'>newTeo 设计产品交互界面，提供多种精美风格。</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 .col-lg-3 .col-xl-3">
            <div className='column row'>
              <div className='col-xs-5 col-sm-5 col-md-12 col-lg-12 col-xl-12'>
                <img src='./images/coding.png' className="img-range"/>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 development-itro'>
                <h4 className='itro-title'>程序开发</h4>
                <p className='main-intro'>newTeo 开发各种平台实现，严格项目监理管控开发流程。
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 .col-lg-3 .col-xl-3">
            <div className='column row'>
              <div className='col-xs-5 col-sm-5 col-md-12 col-lg-12 col-xl-12'>
                <img src='./images/server.png' className="img-range"/>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 development-itro'>
                <h4 className='itro-title'>部署 & 上线</h4>
                <p className='main-intro'>newTeo 部署项目、测评、上线，保障交付。
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
