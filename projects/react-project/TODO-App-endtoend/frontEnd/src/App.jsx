import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
function App() {
  const [todo,setTodo]=useState([]);
  fetch("http://localhost:3000/list-todo",{
    method:"GET",
  })
  .then(async function(res){
    const json=await res.json();
    setTodo(json.todos);
  });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todo}></Todo>
    </div>
  )
}

export default App
