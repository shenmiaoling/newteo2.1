import React from 'react'
import {locales} from '../../settings'
require('./styles')
module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.product
  },
  render(){
    return <div className='container'>
      <div className='row product'>
        <div className='col-lg-6 col-xl-6 col-xs-12 col-sm-6 col-md-6 production-row'>
            <img src='/images/product_1.jpg' className='product-image'/>
            <div className='product-content'>
              <p className='product-text'>JSX-China：</p>
              <p className='product-text-content'>提倡React ＋ REST API 的Web开发模式，社区将逐渐形成一套关于React开发的知识库，将覆盖快速入门、实战模式、实战进阶、延伸探讨和同学们在开发过程中所遭遇的形形色色疑难杂症的汇总及解决方案。
              如果你是一枚新手，社区的知识库将助你一路乘风破浪。
如果你是一枚老鸟，快些儿加入到社区共建中来，大声说～你是怎么玩的。</p>
              <p className='product-text'>敬请期待：</p>
              <p className='product-text-content'>这将是一款别开生面的产品～简约，不简单；专注，不浮夸；随性，却用心；不俗，很好用！
Beta版内测中。。。。。。
              </p>
            </div>
        </div>
        <div className='col-lg-6 col-xl-6 col-xs-12 col-sm-6 col-md-6 production-row'>
            <img src='/images/product_1.jpg' className='product-image'/>
            <div className='product-content'>
              <p className='product-text'>JSX-China：</p>
              <p className='product-text-content'>提倡React ＋ REST API 的Web开发模式，社区将逐渐形成一套关于React开发的知识库，将覆盖快速入门、实战模式、实战进阶、延伸探讨和同学们在开发过程中所遭遇的形形色色疑难杂症的汇总及解决方案。
              如果你是一枚新手，社区的知识库将助你一路乘风破浪。
如果你是一枚老鸟，快些儿加入到社区共建中来，大声说～你是怎么玩的。</p>
              <p className='product-text'>敬请期待：</p>
              <p className='product-text-content'>这将是一款别开生面的产品～简约，不简单；专注，不浮夸；随性，却用心；不俗，很好用！
Beta版内测中。。。。。。
              </p>
            </div>
        </div>
      </div>
  </div>
  }
})
