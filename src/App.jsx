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
state = {myList:[]}; // create myList
componentWillMount() {
  axios.get(jsonFile) // loads the json file and setstate as json
  .then((res) => { this.setState({myList:res.data}) })
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
