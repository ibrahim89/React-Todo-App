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
        props.addTodo(title,desc,value);
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
                <div className="mb-3">
                    <select  onChange={changeHandler}>
                      <option>Select Date</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                    </select> 
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form></div>);
}
export default NewTodo