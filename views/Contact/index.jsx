import React from 'react'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.contact
  },
  render(){
    return <div className='contact'>
      <div className="container">
        <img src='./images/pencil.jpg'className='contact-img img-rounded'/>
        <p className='contact-intro'>
          newTeo乃潮州市潮安区新潮网络科技有限公司（新潮科技）麾下核心技术&设计团队。
          主要提供现代互联网应用的需求梳理、UI设计、程序开发和维护等服务。
          扁平化管理，开放式思维是团队理念，
          敢于运用前沿技术、新颖模式为团队风格，
          自我革新，精益求精乃团队品质。
          一群年轻人因为类似的想法而聚集到一起，为实现共同的愿景而不懈努力。
          这便是newTeo，这正是新潮科技！
        </p>
    </div>
  </div>
  }
})
