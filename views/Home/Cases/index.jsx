import React from 'react'
import { Link } from 'react-router'
import superagent from 'superagent'
import apis from '../../../apis'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      cases: []
    }
  },

  componentDidMount(){
    superagent.get(apis.demos).end((err,response)=>{
      if(err==null){
          this.setState({
            cases: response ? response.body : []
        })
      }
    })
  },

  render(){
    return <div className='Cases'>
      <div className='case-text-center'>
        <p>这些项目被newTeo实现</p>
      </div>
      <div className='container cases-container'>
        <div className="row">
          { this.state.cases.map((item, index) => {
            return(
              <div className="col-xs-6 col-sm-6 col-md-3 col-xl-3 col-lg-3" key={index}>
                <Link to={`/cases/${item.objectId}`} className='cases-container-a'>
                  <div className='img-container '>
                    <div className='cover hidden-md-down'>
                      <p>项目名称：{item.title}</p>
                      <p>价格：¥ {item.price}</p>
                    </div>
                    <img src={`${item.pics[0].url}?imageView2/1/w/235/h/165`} className="cases-img"/>
                    <div className='mobile-cover hidden-md-up'>
                      <p>项目名称：{item.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
              )
          })}
        </div>
      </div>
    </div>
  }
})
