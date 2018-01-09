import React, {Component} from 'react';

export default class ToDoList extends Component {
constructor(props) {
  super(props)
} // constructor end -------------------------
mapThis = (thisList) => {
  console.log("props : " + JSON.stringify(this.props.jsondata));
  if (thisList) {
    // Mapper dans "this.state" pour écrire toutes les entrées
    return(
      thisList.map((i,index) => {
//        var done = i.done, txt = i.txt, id = i.id;
        i.done = !(i.done) ? 'ToDo' : 'Done';
        return(
          <li key={index}>
            <span className={i.done}>{i.done}</span>
            <span className="txt">{i.txt}</span>
          </li>
         ) // map-return end
      }) // map end
    ) // mapThis return end
  } else {
    return(<li key="no"><p className="center">Patientez pendant le chargement... </p></li>)
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