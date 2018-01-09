import React, {Component} from 'react';
import ToDoList from '../views/todolist.jsx';

export default class MakeList extends Component {
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
} // function end
mapThis = (thisList) => {
  console.log("mapThis reach")
  if (thisList) { // Si la liste est chargée
    return(
      thisList.map((index) => { // Mapper dans "this.state" pour écrire toutes les entrées
        var done = index.done, txt = index.txt; eid = index.eid;
        done = !(done) ? 'ToDo' : 'Done';
        return(
          <li key={eid} id={eid}>
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
makelist(){
  return (
    <ToDoList 
      mapThis={this.mapThis(this.props.jsondata)}
    />
  ) // return
} // 
render() {
  return({this.makelist()})
}
} // class end