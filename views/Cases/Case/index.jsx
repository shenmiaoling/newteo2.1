import React from 'react'
require('./styles')
import superagent from 'superagent'
module.exports = React.createClass({
  getInitialState(){
  return{
    caseContent:{pics:[]}
  }
},
  componentDidMount(){
    superagent.get(`https://newteo.leanapp.cn/v1/demos/${this.props.params.id}`).end((err,response)=>{
      this.setState({
        caseContent: response.body
      })
    })
  },
  render(){
    return <div className="container">
      <img className='case-logo' src='/images/pm.png'/>
      <div className='show clearfix'>
        <div className="case-pic">
          {
            this.state.caseContent.pics.map((item,index)=>{
              return<img src={item.url} key={index} className='case-pics'/>
            })
          }
        </div>
      </div>
      <div className='case-content mobile-case-content'>
        <p className='case-info hidden-md-down'>项目名称：{this.state.caseContent.title}</p>
        <p className='case-info hidden-md-down'>项目费用：￥{this.state.caseContent.price}</p>
        <p className='case-info hidden-md-down'>项目周期：{this.state.caseContent.tern} 个工作日</p>
        <p className='case-info hidden-md-down'>项目类型：{this.state.caseContent.subject}</p>
        <div className='case-intro hidden-md-down'>
          {this.state.caseContent.description}
        </div>
        <div className='hidden-md-up mobile-info'>
            <div className='mobile-case'>
              <p>项目费用: ￥{this.state.caseContent.price}</p>
              <p>项目周期: {this.state.caseContent.tern}</p>
              <p>项目类型: {this.state.caseContent.subject}</p>
              <p>{this.state.caseContent.description}</p>
            </div>
        </div>
      </div>
    </div>
  }
})
