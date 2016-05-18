import React from 'react'
require('./styles')
module.exports=React.createClass({
  render(){
    return <div className='header'>
      <div className='container'  style={{height: screen.availHeight-124.59 + 'px'}}>
        <div className='row'>
          <div className='col-md-4 col-lg-4 hidden-sm-down'>
            <img src='../images/balance.png' className='header-img'></img>
          </div>
          <div className='col-md-8 col-xs-12 col-lg-8'>
            <div className=" right-text">
              <h1>这里有一套开发方案，</h1>
              <h1>可供参考</h1>
              <h4>约两分钟，了解您的项目费用和周期</h4>
              <button type="button" className="btn btn-primary">马上了解</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
