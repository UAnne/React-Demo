import React from 'react'
import './index.css'
import { Radio,Icon,Pagination} from 'antd';
class List extends React.Component {
  constructor(props,context){
    super(props,context)
  }
  render(){
    var lastname = JSON.parse(localStorage.getItem("lastname"));
    let todos = lastname ? lastname : [];
    return(
      <div>
        <ul className="list">
          {
            todos.map((item,index) => {
              return (
                <li key={index}>
                  <span><Radio/>{item.value}</span>
                  {/* <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96"/> */}
                </li>
              )
            })
          }
        </ul>
        <p className="empty" style={{display:todos.length>0?'none':'block'}}>暂无计划喔~</p>
        {/* <div className="page" style={{display:todos.length>10?'block':'none'}}>
          <Pagination defaultCurrent={1} total={50} />
        </div> */}
      </div>
    )
  }
}
export default List