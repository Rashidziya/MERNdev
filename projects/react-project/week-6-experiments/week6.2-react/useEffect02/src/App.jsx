import { useEffect, useState } from 'react'
import React from 'react'

function App() {
  const [todo,setTodo]=useState([]);
  useEffect(function(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodo(json.todos);
    })
  },[])
  return (
    <div>
      {todo.map(function(todos){
        return <Todos props={todos}></Todos>
      })}
    </div>
  )
}

function Todos({props}){
  return <div>
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>
}
export default App
