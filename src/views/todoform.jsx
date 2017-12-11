import React from 'react';

export default class ToDoForm extends React.Component {
  addTodo = () => { 
    var formu = document.querySelector("#formInput");
    var input = formu.value;
    if (input.length > 0) {
      formu.value = "";
      console.log("hello : "+input);
    }
  }
  render() {
    return(
      <div className="twocol">
        <p className="formtxt">Ajoutez un élément à la Beberliste :</p>
        <div className="linear addForm"> {/* onSubmit={this.onSubmit} */}
          <input id="formInput" type="text" ref="" /> {/*(input) => this.inputVal = input*/}
          <button onClick={this.addTodo}>+</button>{/*this.addTodo.bind(this)*/}
        </div>
      </div>
      
    );
  }
}