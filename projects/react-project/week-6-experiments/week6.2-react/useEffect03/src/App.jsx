import { useEffect } from 'react';
import { useState } from 'react'
import React from 'react'
import axios from 'axios'
function App() {
  const [sid,setTid]=useState(1);
  return (
    <div>
      <button onClick={()=>{
        setTid(1);
      }}>1</button>
      <button onClick={()=>{
        setTid(2);
      }}>2</button>
      <button onClick={()=>{
        setTid(3);
      }}>3</button>
      <button onClick={()=>{
        setTid(4);
      }}>4</button>
      <Todo id={sid}></Todo>
    </div>
  )
}

function Todo({id}){
  const [todo,setTodo]=useState([]);
  useEffect(function(){
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function (res){
      setTodo(res.data.todo);
    })
  },[id]);
  return <div>
    <h2>{todo.title}</h2>
    <h5>{todo.description}</h5>
  </div>
}

export default App
