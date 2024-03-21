import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n){
  const [todos,setTodos]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const value=setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
    }, n*1000);
    
    // this is atleast hit the server and get back the data for the first time 
    // before starting of the setInterval
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
    // this function is to reset the interval whenever the value of n changes
    return ()=>{
      clearInterval(value);
    }
  },[n]);
  return {loading,todos};
}

// Best possible custom hook for Data fectching 
// same can be achieved by using a swr library whcich is for react Data fectching specially
function App() {
  // let say if we want to new set of todos after every 5 second 
  const {todos,loading}=useTodos(5); // useTodos is custom hook here which does the heavy work 
  if(loading){
    return <div>
      loading....
    </div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
