import React from 'react'
module.exports = React.createClass({
  getInitialState(){
    return{
      checked: false
    }
  },
  handleChange(){
    if(this.state.checked){
      this.props.updateCount(-1)
    }
    else{
      this.props.updateCount(1)
    }
    this.setState({
      checked: !this.state.checked
    })
  },
  render(){
    return <label className="checkbox-inline">
      <input type="checkbox" id="inlineCheckbox1" onChange={this.handleChange} checked={this.state.checked} onClick={this.handleClick} value="option1"/>{this.props.label}
    </label>
  }
})
