import React, {Component} from 'react';
import axios from 'axios';
import './css/app.css';
// Components -------------------------
import AllOver from './views/allover.jsx';
import ToDoList from './views/todolist.jsx';
import ToDoForm from './views/todoform.jsx';
// Env var -------------------------
const jsonFile = 'https://andaroth.github.io/learning-reactjs/src/json/list.json';
// App -------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
  } // constructor end -------------------------
  state = {myList:[]};
  componentWillMount() {
    axios.get(jsonFile) // load this
    .then((res) => {
      this.setState({myList:res.data}) // and setstate to json
    })
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
