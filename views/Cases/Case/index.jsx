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
      <div className='case-content'>
        <p className='case-info hidden-md-down'>项目名称：{this.state.caseContent.title}</p>
        <p className='case-info hidden-md-down'>项目费用：￥{this.state.caseContent.price}</p>
        <p className='case-info hidden-md-down'>项目周期：{this.state.caseContent.tern} 个工作日</p>
        <p className='case-info hidden-md-down'>项目类型：{this.state.caseContent.subject}</p>
        <div className='case-intro hidden-md-down'>
          {this.state.caseContent.description}
        </div>
{/*        <table>
          <tbody>
            <tr className='mobile-case'>
              <td>项目费用</td>
              <td>项目周期</td>
              <td>项目类型</td>
            </tr>
            <tr className='mobile-case'>
              <td>15,000</td>
              <td>5天</td>
              <td>网页</td>
            </tr>
          </tbody>

        </table>*/}
      </div>
    </div>
  }
})
