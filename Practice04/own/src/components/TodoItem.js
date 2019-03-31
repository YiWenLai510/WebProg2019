import '../index.css';
import React from 'react';

class TodoItem extends React.Component{
    
    render(){
        const TodoList = this.props.TodoList;
        var TodoListNodes=[];

        for(var i =0 ; i < TodoList.length ; i++){
            TodoListNodes.push(
            <li className= "todo-app__item">
                <div className="todo-app__checkbox">
                    <input id={i} className="todo-app__checkbox input" type = "checkbox"/>
                    <label htmlFor={i}></label>
                </div>
                <h1 className="todo-app__item-detail" > {TodoList[i]}</h1>
                <img className="todo-app__item-x" src={window.location.origin + '/images/x.png'}/>
            </li>
            );

        }   
        return(
            <ul className="todo-app__list" id="todo-list">
            {TodoListNodes}
            </ul>  
        );
    }
}
export default TodoItem;