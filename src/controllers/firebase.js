import React, {Component} from 'react';
import Firebase from 'firebase';
import ToDoForm from '../views/todoform.jsx';

export default class Fire extends Component {
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
addTodo(e) {
  e.preventDefault();
  var txtInput = this.refs.msg.value
  var eid = this.db.ref().child('/').push().key;
  this.refs.msg.value = ""
  console.log("test : "+txtInput )
  var newPost = {
    done: false,
    txt: txtInput,
    eid: eid
  }
  var updates = {}
  updates['/'+eid+'/'] = newPost
  this.db.ref().update(updates);
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
} // class end