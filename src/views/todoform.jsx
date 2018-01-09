import React, {Component} from 'react';

export default class ToDoForm extends Component {
constructor(props) {
  super(props)
  // this.eventEmitter = new EventEmitter();
}
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
addTodo = (e) => {
  e.preventDefault();
  var inputTxt = this.refs.msg.value
  var listToAppend = document.getElementById("myList");
  var childToAppend = document.createElement("li")
  childToAppend.setAttribute("key","ToDo_"+inputTxt)
  childToAppend.innerHTML = '<span class="ToDo">ToDo</span><span class="txt">'+this.htmlEntities(inputTxt)+'</span>';
  console.log("child : "+childToAppend)
  var itAppend = listToAppend.appendChild(childToAppend);
  this.refs.msg.value = "";
  // this.eventEmitter.emit("change");
  /*e.preventDefault();
  var actualJSON = [];
  var taskList = [];
  this.loadJason(toLoad, function(res) {
    actualJSON = JSON.parse(res);
    taskList = JSON.stringify(actualJSON);
    console.log("addTodo : "+taskList);
  });
  var JSON = new XMLHttpRequest();
  var jsList = JSON.parse("../db/list.json");
  var strList = JSON.stringify(jsList);*/
} // add() end
render() {
  return(
    <div className="twocol">
      <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
      <form className="linear addForm"> 
        <input id="formInput" type="text" ref="msg" />
        <button type="submit" onClick={this.addTodo.bind(this)}>+</button>
      </form>
    </div>
  );
}
} // class end -------------------------