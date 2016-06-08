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
      this.props.removeEvaluation(this.props.item)
    }
    else{
      this.props.updateCount(1)
      this.props.addEvaluation(this.props.item)
    }
    this.setState({
      checked: !this.state.checked
    })
  },
  render(){
    return <label className="checkbox-check">
      <input type="checkbox"  onChange={this.handleChange} checked={this.state.checked} onClick={this.handleClick} value="option1"/>{this.props.label}
      <div className='description'>{this.props.description}</div>
    </label>
  }
})
