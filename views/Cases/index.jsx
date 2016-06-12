import React from 'react'
import {Link,IndexLink} from 'react-router'
import superagent from 'superagent'
import apis from '../../apis'
require ('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      cases: []
    }
  },
  componentWillMount(){
    const query = this.props.location.search
    superagent.get(apis.demos + query).end((err,response)=>{
      this.setState({
        cases: response.body
      })
    })
  },
  componentWillReceiveProps(nextProps){
    const query = nextProps.location.search
    superagent.get(apis.demos + query).end((err,response)=>{
      this.setState({
        cases: response.body
      })
    })
  },
  render(){
    const activeStyle = {color: '#CA8100'}
    return <div>
      <div className='cases-navbar'>
        <div className='container'>
          <div className='case-txt'>
            <ul className="nav nav-inline">
              <li className="nav-item case-nav">
                <Link to="/cases?all" className="nav-link nav-icon-all" activeStyle={activeStyle}><span className="iconfont all icon-all"></span></Link>
              </li>
              <li className="nav-item nav-li case-nav">
                <Link to='/cases/?subject=网站'className="nav-link nav-txt" activeStyle={activeStyle}>网页</Link>
              </li>
              <li className="nav-item nav-li case-nav">
                <Link to='/cases/?subject=移动应用'className="nav-link nav-txt" activeStyle={activeStyle}>软件</Link>
              </li>
              <li className="nav-item case-nav">
                <Link to='/cases/?subject=微信公众号' className="nav-link nav-txt" activeStyle={activeStyle}>微信</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container case-container'>
        {this.state.cases.map((item,index)=>{
          return <div className='caselist' key={index}>
          <div className='row'>
            <div className='col-lg-5 col-xl-5 col-xs-5 col-sm-5 col-md-5 case-image-container'>
              <Link to={`/cases/${item.objectId}`}>
                  <img src={`${item.pics[0].url}?imageView2/1/w/271/h/180`} className='case-image'/>
                  <div className='img-bottom'>
                    {item.title}
                  </div>
                </Link>
            </div>
            {
              item.compeleted ? <img src='/images/accomplish.png' className='case-staus'/> :
              <img src='/images/going.png' className='case-staus'/>
            }
            <div className='col-lg-7 col-xl-7 col-xs-7 col-sm-7 col-md-7'>
                <div className='clearfix'>
                <div className='cases-info'>
                    <h2 className='case-label'>金额</h2>
                    <h2 className='case-count'>￥ {item.price}</h2>
                </div>
                <div className='cases-info'>
                  <h2 className='case-label'>周期</h2>
                  <h2 className='case-count'>{item.tern}周</h2>
                </div>
                <div className='cases-info'>
                  <h3 className='case-label'>类型</h3>
                  <h3 className='case-count'>{item.subject}</h3>
                </div>
                </div>
          </div>
        </div>
        </div>
        })}
      </div>
    </div>
  }
})
