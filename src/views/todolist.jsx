import React, {Component} from 'react';
// import Firebase from 'firebase';

export default class ToDoList extends Component {
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
} // function end
mapThis(jsondata) {
  console.log(jsondata)
  if (jsondata) { // Si la liste est chargée
    return(
      jsondata.map((i) => { // Mapper dans "this.state" pour écrire toutes les entrées
        console.log(i)
        var done = i.done, txt = i.txt, id = i.id;
        done = !(done) ? 'ToDo' : 'Done';
        return(
          <li key={i}>
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
        { console.log/*this.mapThis*/(this.props.jsondata) }
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------