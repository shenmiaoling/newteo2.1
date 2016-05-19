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
import Team from '../views/Team'
import Contact from '../views/Contact'
import Case from '../views/Cases/Case'
import Webcase from '../views/Cases/Web'
import Appcase from '../views/Cases/App'
import Wechatcase from '../views/Cases/Wechat'
import Balance from '../views/Balance'
import Web from '../views/Balance/Web'
import Ios from '../views/Balance/ios'
import Android from '../views/Balance/Android'
import Wechat from '../views/Balance/Wechat'
import Result from '../views/Balance/Result'
import Require from '../views/Require'
import Product from '../views/Product'
module.exports = ()=>{
  return <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Home} />
      <Route path='balance' component={Balance}>
        <Route path='web' component={Web}>
          <Route path='result' component={Result}/>
        </Route>
        <Route path='ios' component={Ios}>
          <Route path='result' component={Result}/>
        </Route>
        <Route path='android' component={Android}>
          <Route path='result' component={Result}/>
        </Route>
        <Route path='wechat' component={Wechat}>
          <Route path='result' component={Result}/>
        </Route>
      </Route>
      <Route path='require' component={Require}/>
      <Route path='cases' component={Cases}>
        <Route path='web' component={Webcase}>
          <Route path='case' component={Case}/>
        </Route>
        <Route path='app' component={Appcase}>
          <Route path='case' component={Case}/>
        </Route>
        <Route path='wechat' component={Wechatcase}>
          <Route path='case' component={Case}/>
        </Route>





      </Route>
      <Route path='product' component={Product}/>
      <Route path='team' component={Team}/>
      <Route path='contact' component={Contact}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
}
