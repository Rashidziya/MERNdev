import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);  // it is the way of initializing the state in react
  // function onClickHandler(){
  //   console.log(count);
  //   setCount(count+1);
    
  // }
  return (
    <div>
      <Buttoncomponent count={count} setCount={setCount}></Buttoncomponent>
    </div>
  )
}

// can create sub component
// componet should be in pascal case which is first letter should be Capital
function Buttoncomponent(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}

export default App
