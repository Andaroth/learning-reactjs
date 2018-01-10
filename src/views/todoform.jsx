import React, {Component} from 'react';
import Firebase from 'firebase';
// import Fire from '../controllers/firebase.js';

export default class ToDoForm extends Component {
constructor(props) {
  super(props)
  this.db = Firebase.database();
}
htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
} // function end
addTodo(e) {
  e.preventDefault();
  var txtInput = this.htmlEntities(this.refs.msg.value)
  //console.log("eid : "+id)
  this.refs.msg.value = ""
  console.log("test : "+txtInput )
  var newPost = {
    done: false,
    txt: txtInput
  }
  this.db.ref().push(newPost)
} // add() end
render() {
  return(
    <div className="twocol">
      <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
      <form className="linear addForm" onSubmit={this.addTodo.bind(this)} > 
        <input id="formInput" type="text" ref="msg" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
} // class end -------------------------