import React, {Component} from 'react';
import './css/app.css';
import AllOver from './views/allover.jsx';
import ToDoList from './views/todolist.jsx';
import ToDoForm from './views/todoform.jsx';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AllOver />
        <ToDoForm />
        <ToDoList />
      </div>
    ); // return() end
  } // render end
} // App
export default App;
