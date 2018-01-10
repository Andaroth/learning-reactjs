import React, {Component} from 'react';
// import Firebase from 'firebase';

export default class ToDoList extends Component {
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
} // function end

mapThis(jsondata) {
  if (Object.keys(jsondata).length > 1) { // Si la liste est chargée
    for(var i in jsondata) {
      var j = jsondata[i]
      var done = j.done, txt = j.txt;
      done = !(done) ? 'ToDo' : 'Done';
      console.log(i+": "+done+","+txt)
      var target = document.getElementById("myList")
      var toAdd = document.createElement("li")
      toAdd.setAttribute("key",i)
      toAdd.innerHTML = '<span class='+done+'>'+done+'</span><span class="txt">'+this.htmlEntities(txt)+'</span>'
      target.appendChild(toAdd)
      /*return(
        <li key={i}>
          <span className={done}>{done}</span>
          <span className="txt">{this.htmlEntities(txt)}</span>
        </li>
       )*/
    }
    /*return(
      
      jsondata.map((data, index) => { // Mapper dans "this.state" pour écrire toutes les entrées
        console.log(data)
        var done = i.done, txt = i.txt, key = i.key;
        done = !(done) ? 'ToDo' : 'Done';
        return(
          <li key={key}>
            <span className={done}>{done}</span>
            <span className="txt">{this.htmlEntities(txt)}</span>
          </li>
         ) // map-return end
      }) // map end
    ) // mapThis return end*/
  } else {
    return(<li key="no"><p className="center">Patientez pendant le chargement... </p></li>)
  }
} // function end
render() {
  return(
    <div className="todolist">
      <ul id="myList">
        { /*console.log*/this.mapThis(this.props.jsondata) }
      </ul>
    </div>
  ) // return end
} // render end
} // class end -------------------------