import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import Application from '../views/app'
import Home from '../views/Home'
import NotFound from '../views/404'
import Cases from '../views/Cases'
import Contact from '../views/Contact'
import Case from '../views/Cases/Case'
import Webcase from '../views/Cases/Web'
import Appcase from '../views/Cases/App'
import Wechatcase from '../views/Cases/Wechat'
import Evaluation from '../views/Evaluation'
import Web from '../views/Evaluation/Web'
import Ios from '../views/Evaluation/ios'
import Android from '../views/Evaluation/Android'
import Wechat from '../views/Evaluation/Wechat'
import Result from '../views/Evaluation/Result'
import Requirement from '../views/Requirement'
import Product from '../views/Product'
module.exports = ()=>{
  return <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Home} />
      <Route path='evaluation' component={Evaluation}/>
      <Route path='evaluation/web' component={Web} />
      <Route path='evaluation/web/result' component={Result}/>
      <Route path='evaluation/ios' component={Ios}/>
      <Route path='evaluation/ios/result' component={Result}/>
      <Route path='evaluation/android' component={Android}/>
      <Route path='evaluation/android/result' component={Result}/>
      <Route path='evaluation/wechat' component={Wechat}/>
      <Route path='evaluation/wechat/result' component={Result}/>
      <Route path='requirement' component={Requirement}/>
      <Route path='cases' component={Cases}/>
      <Route path='cases/:id' component={Case}/>
      <Route path='product' component={Product}/>
      <Route path='contact' component={Contact}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
}
