import React from 'react'
import {Link} from 'react-router'
import Checkbox from '../checkbox'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      checkboxCount: 0
    }
  },
  updateCount(num=0){
    this.setState({
      checkboxCount: this.state.checkboxCount + num
    })
  },
  render(){
    return <div className='container'>
      <div className='row steps'>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/first-step.png' className='block-img first-step '/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/second-step.png' className='block-img'/>
        </div>
        <div className='col-lg-4 col-xl-4 col-xs-4 col-sm-4 col-md-4'>
          <img src='/images/third-step.png' className='block-img third-step'/>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className='head-tr'>
            <th className='t-title'>分类</th>
            <th className='t-title'>模块</th>
            <th className='t-title'>功能点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="4" className='category'>基础功能</th>
            <td className='model'>注册登录</td>
            <td>
              <Checkbox label="账号绑定" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>第三方登录</th>
            <td>
              <Checkbox label="主内容列表/详情" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>列表功能</th>
            <td>
              <Checkbox label="列表定义" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>用户中心</th>
            <td>
              <Checkbox label="会员首页" updateCount={this.updateCount}/>
              <Checkbox label="用户资料修改更新" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="8" className='category'>高级功能</th>
            <td className='model'>通知推送</td>
            <td>
              <Checkbox label="短信通知" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>高级搜索</th>
            <td>
              <Checkbox label="条件筛选" updateCount={this.updateCount}/>
              <Checkbox label="其他筛选" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>主内容相关</th>
            <td>
              <Checkbox label="评论（图文）" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>交互</th>
            <td>
              <Checkbox label="信息发送和获取" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>音乐/视频</th>
            <td>
              <Checkbox label="音乐播放" updateCount={this.updateCount}/>
              <Checkbox label="视频播放" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>文件管理</th>
            <td>
              <Checkbox label="文件上传下载" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>高级用户中心</th>
            <td>
              <Checkbox label="收藏" updateCount={this.updateCount}/>
              <Checkbox label="充值" updateCount={this.updateCount}/>
              <Checkbox label="取现" updateCount={this.updateCount}/>
              <Checkbox label="流水记录" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>位置服务</th>
            <td>
              <Checkbox label="附近/周边" updateCount={this.updateCount}/>
              <Checkbox label="地点标记" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="7" className='category'>电商功能</th>
            <td className='model'>商品相关</td>
            <td>
              <Checkbox label="商品展示" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <td className='model'>活动优惠</td>
            <td>
              <Checkbox label="优惠券" updateCount={this.updateCount}/>
              <Checkbox label="折扣" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>积分系统</th>
            <td>
              <Checkbox label="积分系统设计及展示" updateCount={this.updateCount}/>
              <Checkbox label="商城/兑换" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>评价系统</th>
            <td>
              <Checkbox label="评分评价发布" updateCount={this.updateCount}/>
              <Checkbox label="评价列表" updateCount={this.updateCount}/>
              <Checkbox label="评价评论" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>配送管理</th>
            <td>
              <Checkbox label="地址管理" updateCount={this.updateCount}/>
              <Checkbox label="物流跟踪" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>订单管理</th>
            <td>
              <Checkbox label="订单列表/详情" updateCount={this.updateCount}/>
              <Checkbox label="订单流程" updateCount={this.updateCount}/>
              <Checkbox label="收货标记" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>支付</th>
            <td>
              <Checkbox label="微信支付" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan='2' className='category'>社交功能</th>
            <td className='model'>分享</td>
            <td>
              <Checkbox label="分享到第三平台（微博、QQ空间等）" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <td className='model'>论坛社区</td>
            <td>
              <Checkbox label="论坛社区" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="3" className='category'>其他</th>
            <td className='model'>UI设计（单选）</td>
            <td>
              <Checkbox label="普通设计" updateCount={this.updateCount}/>
              <Checkbox label="高级设计" updateCount={this.updateCount}/>
              <Checkbox label="无（自行提供）" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>统计分析</th>
            <td>
              <Checkbox label="第三方统计接口" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <th className='model'>移动端响应式</th>
            <td>
              <Checkbox label="默认" updateCount={this.updateCount}/>
              <Checkbox label="特殊要求" updateCount={this.updateCount}/>
            </td>
          </tr>
          <tr>
            <td colSpan='3' scope="row"className='check-result'>已选<span className='check-count'> {this.state.checkboxCount} </span>项网页评估
            </td>
          </tr>
        </tbody>
      </table>
      <div className='row'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6'>
          <button type="button" className="btn btn-primary evaluation-btn submit-btn table-btn">清除选项</button>
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6'>
          <Link to='/evaluation/wechat/result'>
            <button type="button" className="btn btn-primary submit-btn evaluation-btn table-btn count-result-btn"><span className='table-btn-txt'>计算结果</span></button>
          </Link>
        </div>
      </div>
    </div>
  }
})
