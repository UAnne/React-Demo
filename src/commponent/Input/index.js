import React from 'react'
import { Input } from 'antd';

import './index.css'
class Input2 extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      // 初始化state
      value:''
    }
  }
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  handleSubmit(e){
    // debugger
    let text = this.state.value;
    if(e.keyCode === 13 && text.trim()){
      this.props.addTodoList (text);
      this.setState({
        value:''
      })
    }
  }
  render(){
    return(
      <div className="input">
        <Input placeholder="想去干嘛呢？" onKeyUp={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.value}/>
      </div>
    )
  }
}
export default Input2