import React from 'react';
import  TodoItem  from './TodoItem';
function Todos(props) {
  
    return (
        <div className="container">
        <h3>Todos List</h3>
        {props.todos.length===0?"No To dos to display":
         props.todos.map((todo)=>{
           return <TodoItem todo={todo} onDelete={props.onDelete} /> 
       })}
        
      </div>
    )
}

export default Todos
