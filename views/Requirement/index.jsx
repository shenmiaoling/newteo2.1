import React from 'react'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      defaultType: '',
    }
  },
  handleSelect(event){
    this.setState({
      defaultType: event.target.value
    })
  },
  componentDidMount(){
    document.title = locales.zh_CN.requirement
    window.scroll(null,0)
    this.setState({
      defaultType: this.props.location.query.type
    })
  },
  render(){
    return <div className='container'>
      <form className='require-form'>
        <div className='form-container'>
          <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目类型</label>
                <select className="form-control" id="exampleSelect1" value={this.state.defaultType} onChange={this.handleSelect}>
                  <option>请选择</option>
                  <option value='Web网站'>Web网站</option>
                  <option value='移动应用APP'>移动应用APP</option>
                  <option value='微信开发'>微信开发</option>
                </select>
              </fieldset>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目预算</label>
                <select className="form-control" defaultValue='1.5万以下'>
                  <option>请选择</option>
                  <option value='1.5万以下'>1.5万以下</option>
                  <option value='1.5-3万'>1.5-3万</option>
                  <option value='3万以上'>3万以上</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-name">
                <label className='require-label'>
                    项目名（1-3个）</label>
                <input type="text" className='name-input form-control'/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-description">
                <label className='require-label'>项目描述（大于50个字符）</label>
                <textarea className='description-input form-control'></textarea>
              </fieldset>
            </div>
          </div>
            <button type="button" className="btn btn-primary btn-requirement">提交需求</button>
          </div>

      </form>
    </div>
  }
})
