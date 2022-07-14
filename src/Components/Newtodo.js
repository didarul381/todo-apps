import React,{useState} from 'react'
import style from './newtodo.module.css'

const Newtodo = (props) => {
    const[todo,setTodo]=useState({title:"",decs:""});
    const{title,desc}=todo;
    const handleChange =(event)=>{
        const name=event.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo,[name]:event.target.value};

        })

    }
    const handlesubmit =(event)=>{
        event.preventDefault();
        props.onAdd(todo);
        setTodo({title:"",desc:""})
    }
  return (
    <form className={style.form} onSubmit={handlesubmit}>
        <div className={style["form-filed"]}>
            <label htmlFor='Title'>Title:</label>
            <input type="text" id="title"name="title" value={title} onChange={handleChange}/>
        </div>
        <div className={style["form-filed"]}> 
            <label htmlFor='Title'>Desc:</label>
            <textarea type="text" id="desc"name="desc" value={desc} onChange={handleChange}/>
        </div>
        <button type="submit">Add todo</button>


    </form>
  )
}

export default Newtodo