import React from 'react'
import {Link} from 'react-router'
import Checkbox from '../checkbox'
const appOptions = require('json!../data').appOptions
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      checkboxCount: 0
    }
  },
  updateCount(num=0){
    this.setState({
      checkboxCount: this.state.checkboxCount + num
    })
  },
  render(){
    return <div className='container'>
      <div className='row steps'>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/first-step.png' className='block-img first-step '/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/second-step.png' className='block-img'/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/third-step.png' className='block-img third-step'/>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className='head-tr'>
            <th className='t-title'>分类</th>
            <th className='t-title'>模块</th>
            <th className='t-title'>功能点</th>
          </tr>
        </thead>
        <tbody>
          {
            appOptions.children.map((item, index) => {
              return <tr key={index} className={item.children.length==0? 'hidden-xl-down':'ha'}>
                {item.name ? <th scope="row" rowSpan={item.count} className='category'>{item.name}</th> : null}
                  <td className='model'>{item.title}</td>
                  <td>
                  {
                    item.children.map((item2, index2) => {
                      return(
                        <Checkbox key={index2} label={item2.title} updateCount={this.updateCount}/>
                        )
                    })
                  }
                </td>
                </tr>
            })
          }
          <tr>
            <td colSpan='3' scope="row"className='check-result'>已选<span className='check-count'> {this.state.checkboxCount} </span>项网页评估
            </td>
          </tr>
        </tbody>
      </table>
      <div className='row'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6'>
          <button type="button" className="btn btn-primary submit-btn evaluation-btn table-btn" onClick={()=>{
              window.location.reload()
          }}>清除选项</button>
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6'>
          <Link to='/evaluation/ios/result'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn table-btn count-result-btn"><span className='table-btn-txt'>计算结果</span></button>
          </Link>
        </div>
      </div>
    </div>
  }
})
