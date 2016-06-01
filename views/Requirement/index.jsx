import React from 'react'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.requirement
  },
  render(){
    return <div className='container'>
      <form className='require-form'>
        <div className='form-container'>
          <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目类型</label>
                <select className="form-control" id="exampleSelect1">
                  <option>请选择</option>
                  <option>Web网站</option>
                  <option>移动应用APP</option>
                  <option>微信开发</option>
                </select>
              </fieldset>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目预算</label>
                <select className="form-control">
                  <option>请选择</option>
                  <option>1.5万以下</option>
                  <option>1.5-3</option>
                  <option>3万以上</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-name">
                <label className='require-label'>
                    项目名（1-3个）</label>
                <input type="text" className='name-input'/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-description">
                <label className='require-label'>项目描述（大于50个字符）</label>
                <textarea className='description-input'></textarea>
              </fieldset>
            </div>
          </div>
            <button type="button" className="btn btn-primary btn-requirement">提交需求</button>
          </div>

      </form>
    </div>
  }
})
