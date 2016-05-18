import React from 'react'
import {locales} from '../../settings'
import Header from './Header'
import Development from './Development'

module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.home
  },
  render(){
    return <div>
      <Header/>
      <Development/>
    </div>
  }
})
