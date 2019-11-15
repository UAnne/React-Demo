import React from 'react'
import './index.css'
class List extends React.Component {
  constructor(props,context){
    super(props,context)
  }
  render(){
    var lastname = JSON.parse(localStorage.getItem("lastname"));
    let todos = lastname ? lastname : [];
    return(
      <div className="list">
        <ul>
          {
            todos.map((item,index) => {
              return (
                <li key={index}>{item.value}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default List