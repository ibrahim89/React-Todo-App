import logo from './logo.svg';
import './App.css';
import Headers from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import NewTodo from './MyComponent/NewTodo';
import React, { useState } from 'react';
import Test  from './MyComponent/Test'
import EventBind from './MyComponent/EventBind';
import  ParentComponent  from './components/ParentComponent';
import NameList from './components/NameList';
import StudentDashboard from './components/StudentDashboard';
function App() {

  // This is Delete Function
  const onDelete = (todo) => {
  setTodoList(todolist.filter((e) => {
      return e !== todo;
    }));
  };

  // This is Add Function
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno = todolist[todolist.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
     
    }
    
    setTodoList([...todolist, myTodo]);
    console.log(myTodo);
  }
   const [todolist, setTodoList] = useState([
    {
      sno: 1,
      title: "Quran",
      desc: "Quran is the Holy book which has come for all Humanity from GOD"
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
      <Headers title="My To Dos List" searchBar={true} />
      {/* <NewTodo addTodo={addTodo} />
      <Todos todos={todolist} onDelete={onDelete} />
       <ParentComponent persons = {personList}/> */}
      <StudentDashboard/>
        <Footer />
    </>


  );
}

export default App;
