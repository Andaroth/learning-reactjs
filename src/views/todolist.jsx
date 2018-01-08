import React, {Component} from 'react';

export default class ToDoList extends Component {
constructor(props) {
  super(props)
  this.myList = this.props.jsondata;
} // constructor end -------------------------
reloadList() {
  console.log("reload")
}
render() {
  return(
    <div className="todolist">
      <ul id="myList">
      {
        /*// Mapper dans "this.state" pour écrire toutes les entrées
        this.myList.map((i) => {
          var done = i.done,txt = i.txt;
          done = !(done) ? 'ToDo' : 'Done';
          return(
            <li key={done+"_"+txt}>
              <span className={done}>{done}</span>
              <span className="txt">{txt}</span>
            </li>
           ) // map-return end
        }) // map end*/
      /* js end */ } 
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------