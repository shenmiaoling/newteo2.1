import React from 'react'
import {locales} from '../../settings'
import superagent from 'superagent'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      defaultType: '',
      demands:{ price:'1.5万以下' },
      price: '',
      title: '',
      description: '',
    }
  },
  handleSelect(event){
    const demands = this.state.demands
    demands.subject = event.target.value
    this.setState({
      defaultType: event.target.value,
      demands: demands
    })
  },
  handleSelect2(event){
    const demands = this.state.demands
    demands.price = event.target.value
    this.setState({
      price: event.target.value,
      demands: demands
    })
  },
  handleChange(event){
    const demands = this.state.demands
    demands.title = event.target.value
    this.setState({
      title: event.target.value,
      demands: demands
    })
  },
  handleChange2(event){
    const demands = this.state.demands
    demands.description = event.target.value
    this.setState({
      description: event.target.value,
      demands: demands
    })
  },
  handleSubmit(event){
    event.preventDefault()
    superagent.post('https://newteo.leanapp.cn/v1/demands').send(this.state.demands).end((err,response)=>{
      alert('发送成功')
      this.setState({
        demands:{description:''},
        title:''
      })
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
      <form accept-charset='UTF-8' className='require-form' onSubmit={this.handleSubmit}>
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
                <select className="form-control" defaultValue='1.5万以下' onChange={this.handleSelect2}>
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
                <input type="text" value={this.state.title} className='name-input form-control' onChange={this.handleChange} required/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-description">
                <label className='require-label'>项目描述（大于50个字符）</label>
                <textarea className='description-input form-control' value={this.state.demands.description} onChange={this.handleChange2} required></textarea>
              </fieldset>
            </div>
          </div>
            <button className="btn btn-primary btn-requirement">提交需求</button>
          </div>

      </form>
    </div>
  }
})
