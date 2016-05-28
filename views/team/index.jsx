import React from 'react'
require('./styles')
module.exports = React.createClass({
  render(){
    return <div className='container'>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>分类</th>
            <th>模块</th>
            <th>功能点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="4" className='category'>基本功能</th>
            <td className='model'>注册登录</td>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>邮箱
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>手机
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>密码找回
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>第三方登录</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>微信
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>QQ
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>微博
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>用户中心</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>修改密码
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>修改更新资料
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>第三方登录管理
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>主内容展示</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>搜索
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>排序
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>收藏
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>评论
              </label>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="8" className='category'>高级功能</th>
            <td className='model'>通知推送方式</td>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>邮件通知
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>短信通知
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>高级搜索</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>条件筛选
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>其他筛选
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>主内容相关</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>评论（文字）
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>客户服务</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>在线客服
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>留言
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>音乐/视频</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>音乐播放
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>视频播放
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>文件管理</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>文件上传下载
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>高级用户中心</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>收藏
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>充值
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>取现
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>流水记录
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>位置服务</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>附近/周边
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>地点标记
              </label>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="6" className='category'>电商功能</th>
            <td className='model'>活动优惠</td>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>优惠券
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>折扣
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>积分系统</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>积分系统设计及展示
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>商城/兑换
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>评价系统</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>评分评价发布
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>评价列表
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>评价评论
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>配送管理</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>地址管理
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>物流跟踪
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>订单管理</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>订单列表/详情
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>订单流程
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>收货标记
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>支付</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>微信支付
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>支付宝支付
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>其他支付
              </label>
            </td>
          </tr>
          <tr>
            <th scope="row" className='category'>社交功能</th>
            <td className='model'>分享</td>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>分享到第三平台（微博、QQ空间等）
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>论坛社区
              </label>
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="5" className='category'>其他</th>
            <td className='model'>UI设计（单选）</td>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>普通设计
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>高级设计
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>无（自行提供）
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>统计分析</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>第三方统计接口
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>桌面端分辨率</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>默认
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>特殊要求
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>移动端响应式</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>默认
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>特殊要求
              </label>
            </td>
          </tr>
          <tr>
            <th className='model'>浏览器兼容性</th>
            <td>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>默认
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/>特殊要求
              </label>
            </td>
          </tr>
          <tr>
            <th scope="row" colSpan="3" className='category'>已选项网页评估
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  }
})
