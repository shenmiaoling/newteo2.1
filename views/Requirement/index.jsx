import React from 'react'
import {locales} from '../../settings'
import apis from '../../apis'
import superagent from 'superagent'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return {
      subject: '',
      budget: '',
      title: '',
      tern: '',
      name: '',
      phone: '',
      description: '',
    }
  },
  componentDidMount(){
    document.title = locales.zh_CN.requirement
    window.scroll(null,0)
    const subject = this.props.location.query.subject
    if (subject)
      this.setState({ subject: subject })
  },
  handleSubject(event){
    this.setState({ subject: event.target.value })
  },
  handleBudget(event){
    this.setState({ budget: event.target.value })
  },
  handleTern(event){
    this.setState({ tern: event.target.value })
  },
  handleTitle(event){
    this.setState({ title: event.target.value })
  },
  handleName(event){
    this.setState({ name: event.target.value })
  },
  handlePhone(event){
    this.setState({ phone: event.target.value })
  },
  handleDescription(event){
    this.setState({ description: event.target.value })
  },
  handleSubmit(event){
    event.preventDefault()
    const data = this.state
    data.phone = Number(data.phone)
    data.tern = Number(data.tern.slice(0,-1))
    superagent
    .post(apis.demands)
    .send(data)
    .end((err,response)=>{
      if (err) {
        alert(response.error)
        return
      }
      alert('需求已提交！')
      this.props.router.replace('/')
    })
  },
  render(){
    return <div className='container'>
      <form accept-charset='UTF-8' className='require-form' onSubmit={this.handleSubmit}>
        <div className='form-container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目类型</label>
                <select className="form-control" value={this.state.subject} onChange={this.handleSubject} >
                  <option>请选择</option>
                  <option>Web网站</option>
                  <option>移动应用APP</option>
                  <option>微信开发</option>
                </select>
              </fieldset>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目预算</label>
                <select className="form-control" value={this.state.budget} onChange={this.handleBudget} >
                  <option>请选择</option>
                  <option>20K以下</option>
                  <option>20-50K</option>
                  <option >50K以上</option>
                </select>
              </fieldset>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <fieldset className="form-group item-style">
                <label className='require-label'>项目周期</label>
                <select className="form-control" value={this.state.tern} onChange={this.handleTern} >
                  <option>请选择</option>
                  <option>1周</option>
                  <option>2周</option>
                  <option>3周</option>
                  <option>4周</option>
                  <option>5周</option>
                  <option>6周</option>
                  <option>7周</option>
                  <option>8周</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-name">
                <label className='require-label'>
                    项目名（2-10字符）</label>
                <input type="text" value={this.state.title} className='name-input form-control' onChange={this.handleTitle} required/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-name">
                <label className='require-label'>
                    你的大名（2-10字符）</label>
                <input type="text" value={this.state.name} className='name-input form-control' onChange={this.handleName} required/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-name">
                <label className='require-label'>
                    手机号码</label>
                <input type="text" value={this.state.phone} className='name-input form-control' onChange={this.handlePhone} required/>
              </fieldset>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <fieldset className="form-group item-description">
                <label className='require-label'>项目描述（大于10小于5000个字符）</label>
                <textarea className='description-input form-control' value={this.state.description} onChange={this.handleDescription} required></textarea>
              </fieldset>
            </div>
          </div>
            <button className="btn btn-primary btn-requirement">提交需求</button>
          </div>

      </form>
    </div>
  }
})
