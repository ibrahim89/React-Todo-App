import React, { useState } from 'react';
const NewTodo = (props) => {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const [value, setValue] = React.useState([""]);
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be empty")
        }
        console.log(value +'selected'); 
        props.addTodo(title,desc);
    }
    const changeHandler = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setValue(e.target.value);
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form  onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">Title:</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc">Description:</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} id="desc" className="form-control" />
                </div>
               
                <button type="submit" className="btn btn-success">Submit</button>
            </form></div>);
}
export default NewTodo