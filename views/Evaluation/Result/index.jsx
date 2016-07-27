import React from 'react'
import calculation from '../calculation'
import {browserHistory} from 'react-router'
require ('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      total: 0,
      count: 0
    }
  },
  componentDidMount(){
    const total = this.props.location.query.total
    const count = this.props.location.query.count
    const pathname = this.props.location.pathname

    if (total)
      this.setState({
        total: total,
        count: count,
        platform: this.getPlatform(pathname),
      })
  },
  handleClick(){
    browserHistory.goBack()
  },

  getPlatform(pathname){
    switch(true) {
      case /wechat/.test(pathname):
      case /web/.test(pathname):
      return 'web'
      case /android/.test(pathname):
      case /ios/.test(pathname):
      return 'app'
    }
  },
  render(){

    return <div className='container'>
      <div className='row steps'>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/first-step.png' className='block-img first-step '/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/second-step.png' className='block-img second-step'/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/third-step.png' className='block-img'/>
        </div>
      </div>
      <h2 className='evaluation-title'>newTeo 预估报价</h2>
      <div className='row table-result'>
        <div className='col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12'>
          <h4 className='price'>{calculation(this.state.platform,this.state.total,this.state.count).finalPrices}</h4>
        </div>
        <div className='col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12'>
          <h6 className='predict-time'>预计开发周期：{calculation(this.state.platform,this.state.total,this.state.count).term}</h6>
        </div>
        <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6 price-container deliver' onClick={this.handleClick}>
          <h3 className='price-btn'>重新整理需求</h3>
        </div>
        <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6 price-container report'>
          <h3 className='price-btn'>生成报价</h3>
        </div>
      </div>
    </div>
  }
})
