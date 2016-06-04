import React from 'react'
require('./styles')
module.exports = React.createClass({
  render(){
    return <div className='contact'>
      <div className="container">
        <img src='./images/pencil.jpg'className='contact-img img-rounded'/>
        <p className='contact-intro'>
          潮州市潮安区新潮科技有限公司（简称“新潮科技”）成立于2016年1月4日，始终致力于信息技术领域发展。秉承“创新、求实、诚信、拼搏”的企业精神，致力为企业提供全面方案，真实实现企业互联网信息智能化，提高企业在网络科技时代的市场竞争力。以客户为中心，以技术为基础，以质量求生存，以诚信求发展，优秀的我们，为客户提供一个无懈可击的展示空间。新潮科技得以在竞争激烈的IT行业中稳步发展，致力于打造“新潮”的优质品牌。期待与国际及国内众多著名IT企业等建立长期战略合作关系，并与广东省内各地市重点IT公司建立和谐、共赢的合作关系。
        </p>
    </div>
  </div>
  }
})
