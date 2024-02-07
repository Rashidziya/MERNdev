import { memo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import React from 'react';
function App() {
  const [count,setCount]=useState(1);


    const inputFunction=useCallback(()=>{
      console.log("Hi There");
    },[])
  return (
    <>
      <Child inputFunction={inputFunction}></Child>
     <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </>
  )
}

const Child=memo(function({inputFunction}){
  console.log("Child Rendered");
  return <div>
    <button>Child Component count </button>
  </div>
})
export default App
