import { useState ,useEffect,memo} from 'react'

import useTodo from './hooks/useTodo'; 
function App() {
  const todo=useTodo();
  
  return (
    <>
      {todo.map(function(todos){
        return <Todo title={todos.title} desc={todos.description}></Todo>
      })}
    </>
  )
}
const Todo=memo(function({title,desc}){
  return <div>
    <h2>{title}</h2>
    <h4>{desc}</h4>
  </div>
})


export default App
