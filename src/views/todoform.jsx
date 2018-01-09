import React, {Component} from 'react';

export default class ToDoForm extends Component {
render() {
  return(
    <div className="twocol">
      <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
      <form className="linear addForm"> 
        <input id="formInput" type="text" ref={(input) => this.msgInput = input} />
        <button type="submit" onClick={ ()=>this.props.addTodo.bind(this) }>+</button>
      </form>
    </div>
  );
}
} // class end -------------------------