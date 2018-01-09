import React, {Component} from 'react';

export default class ToDoList extends Component {
render() {
  return(
    <div className="todolist">
      <ul id="myList">
        { ()=>this.props.mapThis(this.props.jsondata) }
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------