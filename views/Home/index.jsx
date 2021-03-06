import React from 'react'
import {locales} from '../../settings'
import Header from './Header'
import Development from './Development'
import Submit from './Submit'
import Cases from './Cases'
import Product from './Product'
module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.home
  },
  render(){
    return <div>
      <Header/>
      <Development/>
      <Submit/>
      <Cases/>
      <Product/>
    </div>
  }
})
