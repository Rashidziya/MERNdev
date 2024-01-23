import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// A very Basic Todo App
function App() {
  // const [count, setCount] = useState(0)
  const [Todo,setTodo]=useState([{
    title:"go to gym ",
    description:"go to gym form 5 - 9",
  },{
    title:"Study DSA",
    description:"Study Dsa from 6-8am"
  }]);

  function addtodo(){
    setTodo([...Todo,{
      title:"new Todo",
      description:"new desc of new Todo"
    }])
  }
  return (
    
    <div>
      <button onClick={addtodo}>Set Random Todos</button>
      {Todo.map(function(todo){
        return <Todos title={todo.title} description={todo.description}></Todos>
      })}
    </div>
  )
}

function Todos(props){
  return <div>
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>
}

export default App
