import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';


import Todos from './Todos';
import style from './home.module.css'
import Newtodo from './Newtodo';



const Home = () => {
  const[todos,setTodos]=useState([]);
  const handleAddTodo=(todo)=>{
    setTodos((preventTodo) =>{
      return[...preventTodo,{id:uuidv4(), todo}]
    })
  console.log(todo);
  };
  const handleRemove=(id)=>{
   
   setTodos((prevTodos)=>{
    const filtersTodo=prevTodos.filter((todo)=>todo.id!==id);
     return filtersTodo;

   });
  }
    
  return (
    <div className={style.container}>
        <h1 style={{color:"whitesmoke"}}> Todo App</h1>
        <Newtodo onAdd={handleAddTodo}/>
        <Todos todos={todos} onRemove={handleRemove} />
    </div>
  );
};

export default Home