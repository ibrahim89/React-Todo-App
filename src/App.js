import logo from './logo.svg';
import './App.css';
import Headers from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import NewTodo from './MyComponent/NewTodo';
import React, { useState } from 'react';

function App() {

  // This is Delete Function
  const onDelete = (todo) => {
  setTodoList(todolist.filter((e) => {
      return e !== todo;
    }));
  };

  // This is Add Function
  const addTodo = (title, desc,value) => {
    console.log(title, desc);
    let sno = todolist[todolist.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      value:value
    }
    setTodoList([...todolist, myTodo]);
    console.log(myTodo);
  }
  const [todolist, setTodoList] = useState([
    {
      sno: 1,
      title: "Quran",
      desc: "Quran is the best book in the world"
    }
    ,
    {
      sno: 2,
      title: "Hadith",
      desc: "Hadith is the talks and deeds of the Prophet"
    },
    {
      sno: 3,
      title: "Fique",
      desc: "Fique is understanding of Quran & Hadith"
    }
    , {
      sno: 4,
      title: "Seerah",
      desc: "Seerah is the Life story of Prophet Mohammad s.a.w"
    }
  ]);
  return (
    <>
      <Headers title="My To Dos List" searchBar={false} />
      <NewTodo addTodo={addTodo} />
      <Todos todos={todolist} onDelete={onDelete} />
       <Footer />
    </>


  );
}

export default App;
