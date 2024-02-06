import { useState } from 'react'
import React,{Fragment} from 'react'

function App() {
  const [title,setTitle]=useState("Rashid00");
  function ChangeHandler(){
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={ChangeHandler}>Click to Change The Title</button>
      
      <Header title={title}></Header>
      <Header title="Ziya"></Header>
      <Header title="Ziya10"></Header>
      <Header title="Ziya12"></Header>
      <Header title="Ziya14"></Header>
      <Header title="Ziya15"></Header>
    </div>
  )
}
const Header =React.memo(function Header({title}){
  return <div>
    My Name is {title}
  </div>
});


export default App
