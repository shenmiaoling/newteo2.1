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
                <label>项目类型</label>
                <select className="form-control" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </fieldset>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <fieldset className="form-group item-style">
                <label>项目预算</label>
                <select className="form-control" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </fieldset>
            </div>
          </div>
          <fieldset className="form-group">
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <label className='item-name'>
                  项目名（1-3个）</label>

              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                <input type="text" className='name-input'/>
              </div>
              </div>
              </div>
            </fieldset>
            <fieldset className="form-group">
              <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                  <label className='item-style description-label'>项目描述（大于50个字符）</label>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <textarea className='item-description'></textarea>
                </div>
              </div>
            </fieldset>
            <button type="button" className="btn btn-primary btn-requirement">提交需求</button>
          </div>

      </form>
    </div>
  }
})
