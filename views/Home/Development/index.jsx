import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='development'>
      <div className='text-center'>
        <h1>实现一套完整的开发流程</h1>
      </div>
      <div className='container container-block'>
        <div className="row">
          <div className="col-xs-12 col-md-3 .col-lg-3 .col-xl-3">
            <div className='column'>
              <img src='./images/pm.png' className="img-range"/>
              <h4>需求整理 & 原型</h4>
              <p>newTeo 为您整理项目需求，编写需求文档并制作原型</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 .col-lg-3 .col-xl-3">
            <div className='column'>
              <img src='./images/UI.png' className="img-range"/>
              <h4>UI 设计</h4>
              <p>newTeo 为您设计产品界面，多种风格满意为止。</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 .col-lg-3 .col-xl-3" id='column'>
            <div className='column'>
              <img src='./images/coding.png' className="img-range"/>
              <h4>程序开发</h4>
              <p>newTeo 为您开发各种平台实现，严格项目监理管控开发流程，保障交付。</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 .col-lg-3 .col-xl-3" id='column'>
            <div className='column'>
              <img src='./images/server.png' className="img-range"/>
              <h4>部署 & 上线</h4>
              <p>newTeo 为您部署项目、测评、上线</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
