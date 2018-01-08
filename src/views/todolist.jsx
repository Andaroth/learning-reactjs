import React, {Component} from 'react';

export default class ToDoList extends Component {
constructor(props) {
  super(props)
} // constructor end -------------------------
mapThis = (thisList) => {
  if (thisList) {
    // Mapper dans "this.state" pour écrire toutes les entrées
    this.jsondata.map((i) => {
      var done = i.done,txt = i.txt, id = i.id;
      done = !(done) ? 'ToDo' : 'Done';
      return(
        <li key={id}>
          <span className={done}>{done}</span>
          <span className="txt">{txt}</span>
        </li>
       ) // map-return end
    }) // map end
  } else {
    return(<li><p className="center">Please wait while loading... </p></li>)
  }
}
render() {
  return(
    <div className="todolist">
      <ul id="myList">
        {this.mapThis(this.props.jsondata)} 
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------