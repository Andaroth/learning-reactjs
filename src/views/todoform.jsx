import React, {Component} from 'react';
import Firebase, {connect} from 'firebase';
import Fire from '../controllers/firebase.js';

export default class ToDoForm extends Component {
/*constructor(props) {
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
  var eid = this.db.ref().child('/tasklist').push().key;
  this.refs.msg.value = ""
  console.log("test : "+txtInput )
  var newPost = {
    done: false,
    txt: txtInput,
    eid: eid
  }
  var updates = {}
  updates['/tasklist/'+eid+'/'] = newPost
  this.db.ref().update(updates);
} // add() end*/
render() {
  return(
    <div className="twocol">
      <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
      <form className="linear addForm"> 
        <input id="formInput" type="text" ref="msg" />
        <button type="submit" onClick={ ()=>{Fire.props.addTodo.bind(this)} }>+</button>
      </form>
    </div>
  );
}
} // class end -------------------------