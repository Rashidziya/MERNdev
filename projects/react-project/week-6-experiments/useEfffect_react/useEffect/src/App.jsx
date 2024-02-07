import { useEffect, useState } from "react";
import React from "react";
function App() {
  const [todo,setTodos]=useState([]);
  useEffect(()=>{
     setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json=await res.json();
        setTodos(json.todos);
      })
    
     }, 5000);
  },[])
    return <div>
    
    {todo.map(function(todos){
      return <Todo key={todos.id} title={todos.title} description={todos.description}></Todo>

    })}
  </div>;
}
const Todo=React.memo(function Todo({title,description}){
  return <div>
    <h3>{title}</h3>
    <h5>{description}</h5>
  </div>
})

 

export default App;

// it is hooks in react just like the usestate which we had used earlier
// hooks is type of function in react which lets "hooks into " the state
// in react and another is hooks into the lifecyle feature of a component.

// usestate => is a hooks which lets us create/inititalize the component state variable
// and gives the function to update that state variable.

// useEffect => In functional Component it lets Mounts on the web/Render it only once.
// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)
