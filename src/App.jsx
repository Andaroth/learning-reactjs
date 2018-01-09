import React, {Component} from 'react';
import Firebase from 'firebase';
//import axios from 'axios';

import './css/app.css';
// Components -------------------------
import AllOver from './views/allover.jsx';
import ToDoList from './views/todolist.jsx';
import ToDoForm from './views/todoform.jsx';
// Env var -------------------------
// const jsonFile = 'https://andaroth.github.io/learning-reactjs/src/json/list.json';
// App -------------------------
export default class App extends Component {
constructor(props) {
  super(props)
  Firebase.initializeApp({
    apiKey: "AIzaSyBCXcEXeAyLvwG86lwrCVOx6nc36az0Uc4",
    authDomain: "learning-reactjs-ade63.firebaseapp.com",
    databaseURL: "https://learning-reactjs-ade63.firebaseio.com",
    projectId: "learning-reactjs-ade63",
    storageBucket: "learning-reactjs-ade63.appspot.com",
    messagingSenderId: "846535005199"
  });
  this.db = Firebase.database();
  Firebase.auth().signInWithEmailAndPassword("ax.fiolle@gmail.com","axelfiolle")
} // constructor end -------------
state = {myList:[{}]}; // create myList
componentWillMount() {
  // axios.get(jsonFile).then((res) => { this.setState({myList:res.data}) })
  this.db.ref("/").once('value').then((res)=>{
    console.log("res : "+res.val())
    this.setState({myList:res.val()})
  });
} // willmount end
render() {
  return (
    <div className="main">
      <AllOver />
      <ToDoForm />
      <ToDoList jsondata={this.state.myList} />
    </div>
  ); // return() end
} // render end
} // App end -------------------------
