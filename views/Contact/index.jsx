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
    <div className='contact-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont address icon-address'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <p className='info-text'>潮州市庵埠镇竹围工业区100号</p>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont email icon-email'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <p className='info-text'>info@newteo.com</p>
              </div>
            </div>
            <div className='row info-address'>
              <div className='col-lg-2 col-xl-2 col-xs-2 col-sm-2 col-md-2'>
                <div className='info-icon iconfont contact icon-contact'></div>
              </div>
              <div className='col-lg-10 col-xl-10 col-xs-10 col-sm-10 col-md-10'>
                <p className='info-text'>0768-2637496</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-6 col-xs-6 col-sm-6 col-md-6'>
            <div className='info-wechat'>
              <img src='./images/wechat-code.jpg' className='wechat-code img-thumbnail'/>
              <p className='code-text'>公众号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
})
