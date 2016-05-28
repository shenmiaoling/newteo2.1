import React from 'react'
module.exports = React.createClass({
  render(){
    return <div className='container'>
      <table className="table table-bordered">
        <thead>
          <tr class="row">
            <div class="col-xs-3">分类</div>
            <div class="col-xs-3">模块</div>
            <div class="col-xs-6">功能点</div>
        </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
})
