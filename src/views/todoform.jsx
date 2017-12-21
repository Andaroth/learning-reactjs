import React, {Component} from 'react';
var toLoad = require("./list.json"); //"list.json";

export default class ToDoForm extends Component {
  /*constructor(props) {
    super(props)
    
  }*/
  /*loadJason(toLoad, callback) {
    console.log("> loadJason(" + toLoad + ", callback);");
    var loadData = new XMLHttpRequest(); // loadData est une requête XHR
    loadData.overrideMimeType("application/json"); // de type JSON
    loadData.open("GET", toLoad); // Je charge le fichier indiqué en param
    console.log("loadData : " + loadData);
    // onload, comme ça je fais le callback uniquement une fois que le chargement est radis
    loadData.onload = function() {
      // code 4 ET 200 
      if (loadData.readyState == 4 && loadData.status == "200") {
        callback(loadData.responseText); // Envoyer cette donnée au deuxième argument
      }
    } // fin onLoad
    loadData.send(null);
    console.log("loadData : " + loadData);
  }*/
  loadJason(toLoad, callback) {
    console.log("> loadJason(" + toLoad + ", callback);");
    var loadData = new XMLHttpRequest(); // loadData est une requête XHR
    loadData.overrideMimeType("application/json"); // de type JSON
    loadData.open("GET", toLoad); // Je charge le fichier indiqué en param
    console.log("loadData : " + loadData);
    // onload, comme ça je fais le callback uniquement une fois que le chargement est radis
    loadData.onload = function() {
      // code 4 ET 200 
      if (loadData.readyState === 4 && loadData.status === "200") {
        callback(loadData.responseText); // Envoyer cette donnée au deuxième argument
      }
    } // fin onLoad
    loadData.send(null);
    console.log("loadData : " + loadData);
    
    // return loadData;
  } // loadJason end
  addTodo(e) {
    e.preventDefault();
    var actualJSON = [];
    var taskList = [];
    this.loadJason(toLoad, function(res) {
      actualJSON = JSON.parse(res);
      taskList = JSON.stringify(actualJSON);
      console.log("addTodo : "+taskList);
    });
    /*var JSON = new XMLHttpRequest();
    var jsList = JSON.parse("../db/list.json");
    var strList = JSON.stringify(jsList);*/
  } // add() end
  render() {
    return(
      <div className="twocol">
        <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
        <form className="linear addForm" onSubmit={this.addTodo.bind(this)}> 
          <input id="formInput" type="text" ref="" /> {/*(input) => this.inputVal = input*/}
          <button type="submit">+</button>{/*this.addTodo.bind(this)*/}
        </form>
      </div>
      
    );
  }
}