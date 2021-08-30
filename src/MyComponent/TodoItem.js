import React from 'react';

function TodoItem({todo,onDelete}) {
    return (
        <div className="container">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
         <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>  
      
    </div>
    )
}

export default TodoItem
