import React, {Component} from 'react';
import './css/app.css';

import AllOver from './views/allover.jsx';
import ToDoList from './views/todolist.jsx';
import ToDoForm from './views/todoform.jsx';

const jsonFile = 'https://andaroth.github.io/learning-reactjs/src/json/list.json';

var loadFile = (url) => {
  var xhr = new XMLHttpRequest()
  xhr.open('get', url, true)
  xhr.responseType = 'json'
  xhr.onreadystatechange = function() {
    var status;
    if (xhr.readyState == 4) { // done
      status = xhr.status;
      if (status == 200) { // okay
        console.log("okay")
        console.log("result : "+xhr.response)
        this.jsondata = xhr.response;
        console.log("jsondata1 : "+this.jsondata)
      } else {
        console.log("cant find !")
      }
    } // readyState=4 end
  } // onreadystatechange end
  xhr.send()
} // loadfile end

export default class App extends Component {
  constructor(props) {
    super(props);
    
    /*this.jsondata = [
      {
        "done":true, 
        "txt":"Dormir chez un Chinois pour son anniversaire"
      },
      {
        "done":false, 
        "txt":"Utiliser Wix"
      },
      {
        "done":true,
        "txt":"Installer WordPress"
      }
    ] // json end*/
  } // constructor end -------------------------
  componentWillMount() {
    console.log("jsondata2 : "+this.jsondata)
  }
  render() {
    return (
      <div className="main">
        <AllOver />
        <ToDoForm />
        <ToDoList jsondata={this.jsondata} />
      </div>
    ); // return() end
  } // render end
} // App end -------------------------
