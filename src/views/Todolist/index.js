import React from 'react';
import Input from './../../commponent/Input';
import List from './../../commponent/List';
import './index.css'

class Todolist extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: []
    }
  }
   // 添加单条数据
   addTodoList(value) {
    const id = Date.now();
    let todo = {};
    todo.id=id;
    todo.value = value;
    let {todos} = this.state;
    var array2 = []
    todos.unshift(todo);
    array2.unshift(todo);
    var lastname = JSON.parse(localStorage.getItem("lastname"));
    var array = lastname? array2.concat(lastname):todos
    this.setState({
      todos:array
    })
    localStorage.setItem("lastname", JSON.stringify(array));
  }

  render() {
    return (
      <div className="content">
          <h1>备忘录</h1>
          <div className="warpper">
            <Input addTodoList={this.addTodoList.bind(this)} />
            <List todos={this.state.todos}/>
          </div>
      </div>
    );
  }
}
export default Todolist;
