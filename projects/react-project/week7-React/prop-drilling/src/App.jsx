import { useState } from 'react'
function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount}></Counter>
    </div>
  )
}
function Counter({count,setCount}){
  return <div>
    The Count is {count}
    <SetCounter count={count} setCount={setCount}></SetCounter>
  </div>
}
// so here Counter Component just had to take the props setcount as an input 
// so that it can reach to the lower SetCounter Component which in this case
// Had the need of the partiular props. Here it is the Example of Prop-Drilling.
function SetCounter({count,setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Count {count}</button>
  </div>
}
export default App
