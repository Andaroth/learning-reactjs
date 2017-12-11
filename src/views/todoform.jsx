import React from 'react';

export default class ToDoForm extends React.Component {
  /*addTodo(e){ 
    e.preventDefault();
    var input = this.inputVal.value;
    this.props.onSubmit({
      title: input,
      dateSubmit: new Date()
    });
    console.log(this.props.onSubmit);
  }*/
  render() {
    return(
      <div className="twocol">
        <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
        <form className="linear addForm"> {/* onSubmit={this.onSubmit} */}
          <input id="formInput" type="text" ref="" /> {/*(input) => this.inputVal = input*/}
          <button onClick="">+</button>{/*this.addTodo.bind(this)*/}
        </form>
      </div>
      
    );
  }
}