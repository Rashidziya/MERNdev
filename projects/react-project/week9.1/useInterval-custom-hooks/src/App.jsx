import { useEffect, useState } from 'react'
import './App.css'

function useInterval(fun,n){
  useEffect(()=>{
    const value=setInterval(() => {
      fun();
    }, n);
    return ()=>{
      clearInterval(value);
    }
  },[n])
}
function App() {
  const [count,setCount]=useState(0);
  useInterval(()=>{
    setCount(c=>c+1);
  },1000)
  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App
