import React, {Component} from 'react';
//import ToDoForm from './todoform.jsx';

export default class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.actualJSON = /*ToDoForm.loadJason("./list.json",function(res){
       return JSON.parse(res);
    }); */[
        {id:0,done:0, txt:"Premier message qui est très long juste pour voir"},
        {id:1,done:0, txt:"Second message"},
        {id:2,done:1, txt:"Troisième message"}
      ] // list end */
  }
  render() {
    return(
      <div className="todolist">
        <ul>
          {
            // Mapper dans "this.state" pour écrire toutes les entrées
            this.actualJSON.map((i) => {
              var done = i.done;
              var txt = i.txt;
              var id = i.id;
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
                <li id={id} key={id}>
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
