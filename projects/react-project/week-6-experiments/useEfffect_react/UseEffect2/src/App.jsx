import { Fragment, useState ,useEffect} from 'react'
import React from 'react'
// Task is to After Every 1 Sec counter Should be +1 without Rendering the Component.
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setCount(count+1);
    }, 1000);
  },[count]);
  
  return (
    <div>
      <Countcomponent count={count}></Countcomponent>
    </div>
  )
}

function Countcomponent({count}){
    return <div>
      Count is {count}
    </div>
}
export default App
