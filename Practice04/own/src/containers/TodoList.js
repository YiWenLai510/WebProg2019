import React from 'react';
import '../index.css';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';
//import TodoItem from '../components/TodoItem';
class Header extends React.Component{
    render(){
        return(
            <div className="todo-app__header">
                <div className="todo-app__title">todos</div>
            </div>
        );
    }
}
class Todo_main extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            todoList:[]
        };
    }   
    //setItem = str => this.setState(() => ({todoItem: str}));
     
    handleInput = e => {
        if (e.key === "Enter" && e.target.value !=='') {
            //console.log(e.target.value);
            var tmp = this.state.todoList;
            tmp.push(e.target.value);
            this.setState({todoList: tmp });
            //onsole.log(this.state.todoList); 
            e.target.value ='';

        } 
    };
    
    render(){
       
        return(
            <div className="todo-app__main">
                <Input onKeyPress={this.handleInput}/>
                <TodoItem TodoList={this.state.todoList} />
            </div>
        );
    }
}
class Footer extends React.Component{
    render(){
        return(
            <div className="todo-app__footer" id="todo-footer">

                <div className="todo-app__total" id="todo-count">0 left</div>

                <ul className="todo-app__view-buttons">  
                    <button >All</button>
                    <button >Active</button>
                    <button >Complete</button>
                </ul>

                <div className="todo-app__clean">
                    <button >clear complete</button>
                </div>
            
            </div>

        );
    }
}
class TodoList extends React.Component{
    
    render(){
        return(
            <div className="todo-app__root">
                <Header />
                <Todo_main />
                <Footer />
            </div>
        );
    }
}
export default TodoList;