import React, {Component} from 'react';
import Firebase, {connect} from 'firebase';

export default class ToDoList extends Component {
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
} // function end
mapThis = (thisList) => {
  console.log("local mapThis reach")
  if (thisList) { // Si la liste est chargée
    return(
      thisList.map((index) => { // Mapper dans "this.state" pour écrire toutes les entrées
        var done = index.done, txt = index.txt;
        done = !(done) ? 'ToDo' : 'Done';
        return(
          <li key={index}>
            <span className={done}>{done}</span>
            <span className="txt">{this.htmlEntities(txt)}</span>
          </li>
         ) // map-return end
      }) // map end
    ) // mapThis return end
  } else {
    return(<li key="no"><p className="center">Patientez pendant le chargement... </p></li>)
  }
} // function end
render() {
  return(
    <div className="todolist">
      <ul id="myList">
        { this.mapThis(this.props.jsondata) }
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------