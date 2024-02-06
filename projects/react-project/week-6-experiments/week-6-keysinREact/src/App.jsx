import { useState } from 'react'
import React from 'react';
let counter=4;
function App() {
  const [todo,setTodo]=useState([{
    id:1,
    title:"go to gym",
    description:"Exercise the Key For a Healthy Life"
  },{
    id:2,
    title:"Do DSA",
    description:"Problem Solving is A Skill which can Achieved/Sharpened through DSA"
  },{
    id:3,
    title:"Rashid",
    description:"This Simply is my Name"
  }])

  function addTodo(){

    const newTodo=[...todo,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }];
    // for(let i=0;i<todo.length;i++){
    //   newTodo.push(todo[i]);
    // }
    // newTodo.push({
    //   id:4,                   // kids way of appending element in the last of the array
    //   title:Math.random(),
    //   description:Math.random()
    // });
    setTodo(newTodo);
  }

  return (
    <div>
      <button onClick={addTodo}>Click to Add Todo</button><br></br><br></br>
      <input type='text' placeholder='title'></input><br></br>
      <input type='text' placeholder='description'></input>
      {todo.map(function(todos){
        return <Todo key={todos.id} title={todos.title} description={todos.description}></Todo>
      })}
    </div>
  )
}
// creating a component for todos which accept the title and description as input
const Todo=React.memo(function Todo({title,description}){
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
});

export default App
