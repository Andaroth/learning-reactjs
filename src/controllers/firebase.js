import React, {Component} from 'react';
import firebase from 'firebase';
import ToDoForm from '../views/todoform.jsx';

export default class FireBase extends Component {
constructor(props) {
  super(props)
  this.config = {
    apiKey: "AIzaSyBCXcEXeAyLvwG86lwrCVOx6nc36az0Uc4",
    authDomain: "learning-reactjs-ade63.firebaseapp.com",
    databaseURL: "https://learning-reactjs-ade63.firebaseio.com",
    projectId: "learning-reactjs-ade63",
    storageBucket: "learning-reactjs-ade63.appspot.com",
    messagingSenderId: "846535005199"
  }
  this.db = firebase.database();
  firebase.initializeApp(this.config);
} // constructor end -------------
addTodo = (e) => {
  e.preventDefault();
  var txtInput = this.props.msgInput.value;
  console.log("test : "+txtInput )
  var newPost = {
    done: false,
    txt: txtInput
  }
  this.db.ref("/").set(newPost);
} // add() end
removeTodo = (target) => {
} // remove() end
toggleTodo = (target) => {
  this.db.ref("/"+target)
  .then((select) => { this.doneStatus = (select.val().done) });
  (this.doneStatus) ?
    this.db.ref("/"+target).update({done: false}):
    this.db.ref("/"+target).update({done: true});
} // toggle() end
todoform(props) {
  return (
    props.map((target) => {
      return (
        <ToDoForm 
          addTodo={this.addTodo.bind(this)}
          removeTodo={this.removeTodo(target)}
          toggleTodo={this.toggleTodo(target)}
        />
      ) // return
    }) // map
  ) // return
} // todoform
render() {
  return({this.todoform(props)})
}
} // class end