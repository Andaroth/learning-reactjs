import React from 'react';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[
        {done:0, txt:"Premier message qui est très long juste pour voir"},
        {done:0, txt:"Second message"},
        {done:0, txt:"Troisième message"}
      ] // list end
    } // state end
  }
  render() {
    return(
      <div className="todolist">
        <ul>
          {
            // Mapper dans "this.state" pour écrire toutes les entrées
            this.state.list.map((i) => {
              var done = i.done;
              var txt = i.txt;
              switch (done) {
                case 0:
                  done = 'ToDo';
                  break;
                case 1:
                  done = 'Done';
                  break;
                default:
                  done = 'Not a bool';
                  break;
              } // switch end
              return(
                <li>
                  <span className="id">{done}</span>
                  <span className="txt">{txt}</span>
                </li>
               ) // map-return end
            }) // map end
          }
        </ul>
      </div>
    ) // return end
  } // render end
} // ToDoList end
